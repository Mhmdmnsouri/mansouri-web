"use client";

import { useEffect } from "react";

const PERSIAN_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
const LATIN_DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function toPersianDigits(text: string) {
  return text.replace(/\d/g, (d) => PERSIAN_DIGITS[Number(d)]);
}

function toLatinDigits(text: string) {
  return text
    .replace(/[۰-۹]/g, (d) => LATIN_DIGITS[PERSIAN_DIGITS.indexOf(d)])
    .replace(/[٠-٩]/g, (d) => LATIN_DIGITS[d.charCodeAt(0) - "٠".charCodeAt(0)]);
}

function shouldSkipNode(node: Node) {
  const parent = node.parentElement;
  if (!parent) return true;
  const tag = parent.tagName;

  return (
    tag === "SCRIPT" ||
    tag === "STYLE" ||
    tag === "NOSCRIPT" ||
    tag === "TEXTAREA" ||
    tag === "INPUT" ||
    tag === "CODE" ||
    tag === "PRE"
  );
}

function convertTreeDigitsByLocale(root: ParentNode, locale: string) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();

  while (node) {
    if (!shouldSkipNode(node)) {
      const text = node.textContent ?? "";
      const converted = locale === "fa" ? toPersianDigits(text) : toLatinDigits(text);
      if (text !== converted) {
        node.textContent = converted;
      }
    }

    node = walker.nextNode();
  }
}

export function DocumentLocaleSync({
  locale,
  direction,
}: {
  locale: string;
  direction: "rtl" | "ltr";
}) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
  }, [locale, direction]);

  useEffect(() => {
    convertTreeDigitsByLocale(document.body, locale);

    if (locale !== "fa") return;

    const observer = new MutationObserver(() => {
      convertTreeDigitsByLocale(document.body, "fa");
    });

    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, [locale]);

  return null;
}
