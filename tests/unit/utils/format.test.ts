/**
 * Format Utility Unit Tests
 */

import { describe, it, expect } from "vitest";
import {
  formatNumber,
  formatCurrency,
  formatPercent,
  formatChange,
  formatCarbon,
  truncate,
} from "@/lib/utils/format";

describe("formatNumber", () => {
  it("formats with thousands separators", () => {
    expect(formatNumber(12500)).toBe("12,500");
  });
  it("formats decimals", () => {
    expect(formatNumber(1.5, 2)).toBe("1.50");
  });
});

describe("formatCurrency", () => {
  it("prepends currency symbol", () => {
    expect(formatCurrency(12500)).toBe("৳12,500");
  });
});

describe("formatPercent", () => {
  it("multiplies by 100 and appends %", () => {
    expect(formatPercent(0.152)).toBe("15.2%");
  });
});

describe("formatChange", () => {
  it("prefixes positive values with +", () => {
    expect(formatChange(5.2)).toBe("+5.2%");
  });
  it("negative values have - sign", () => {
    expect(formatChange(-3.1)).toBe("-3.1%");
  });
});

describe("formatCarbon", () => {
  it("shows kg for small values", () => {
    expect(formatCarbon(450)).toBe("450 kg CO₂e");
  });
  it("converts to tonnes for large values", () => {
    expect(formatCarbon(1500)).toBe("1.50 t CO₂e");
  });
});

describe("truncate", () => {
  it("truncates long strings", () => {
    expect(truncate("Hello World", 8)).toBe("Hello...");
  });
  it("passes short strings through", () => {
    expect(truncate("Hi", 10)).toBe("Hi");
  });
});
