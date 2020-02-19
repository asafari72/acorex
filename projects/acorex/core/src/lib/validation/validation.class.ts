
export interface AXValidationRuleResult {
  message?: string;
  result: boolean;
  target?: any;
}

export interface AXValidationResult {
  result: boolean;
  items?: AXValidationRuleResult[];
}
