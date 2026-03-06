"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ResumeEnhancement() {
  const [open, setOpen] = useState(false);

  return (
    <Card className="p-5">
      <button className="flex w-full items-center justify-between text-left" onClick={() => setOpen((v) => !v)}>
        <span className="text-base font-semibold">针对 Minara 的简历增强建议</span>
        <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open ? (
        <ul className="mt-4 space-y-2 text-sm text-muted">
          <li>• 强调“Demo / Cookbook / PoC”如何直接对应 Minara 的开发者生态目标。</li>
          <li>• 在每段经历里补一条可量化指标，例如 TTFV、SLA、工单关闭率、活动后激活。</li>
          <li>• 将 Web3、x402、Prompt Workflow、Docs-to-Code 等关键词更靠前展示。</li>
          <li>• 面试时可将本页作为“主简历”，把两项项目当作案例附件联动讲解。</li>
        </ul>
      ) : null}
    </Card>
  );
}
