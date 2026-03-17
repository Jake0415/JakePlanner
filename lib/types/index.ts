// ============================================================
// AI-SERVER-COMPOSER 타입 정의
// ============================================================

// --- 공통 타입 ---

export type UserRole = "super_admin" | "admin" | "member";

export type CategoryGroup = "server_parts" | "network_infra";

export type QuotationType = "profitability" | "spec_match" | "performance";

export type RfpStatus = "uploaded" | "parsing" | "parsed" | "error";

export type QuotationStatus = "draft" | "confirmed" | "won" | "lost";

export type BidResult = "won" | "lost";

export type PlanType = "free" | "basic" | "pro" | "enterprise";

// --- 데이터 모델 ---

export interface Tenant {
  id: string;
  company_name: string;
  business_number: string;
  plan_type: PlanType;
  created_at: string;
}

export interface User {
  id: string;
  tenant_id: string;
  email: string;
  name: string;
  phone: string;
  department: string;
  role: UserRole;
  created_at: string;
}

export interface PartCategory {
  id: string;
  tenant_id: string;
  name: string;
  display_name: string;
  group: CategoryGroup;
  spec_fields: SpecFieldDefinition[];
  is_default: boolean;
  created_at: string;
}

export interface SpecFieldDefinition {
  key: string;
  label: string;
  type: "text" | "number" | "select";
  options?: string[];
  unit?: string;
}

export interface Part {
  id: string;
  tenant_id: string;
  category_id: string;
  model_name: string;
  manufacturer: string;
  specs: Record<string, string | number>;
  created_at?: string;
}

export interface PartPrice {
  id: string;
  part_id: string;
  list_price: number;
  market_price: number;
  cost_price: number; // 복호화된 값 (DB에서는 암호화)
  supply_price: number;
  margin?: number; // 계산 필드: supply_price - cost_price
  margin_rate?: number; // 계산 필드: margin / supply_price * 100
}

export interface RfpDocument {
  id: string;
  tenant_id: string;
  uploaded_by: string;
  file_name: string;
  file_url: string;
  status: RfpStatus;
  parsed_requirements: ParsedRequirement[] | null;
  created_at: string;
}

export interface ParsedRequirement {
  category: string;
  item: string;
  spec: string;
  quantity: number;
  notes?: string;
}

export interface Quotation {
  id: string;
  tenant_id: string;
  rfp_id: string;
  quotation_type: QuotationType;
  total_cost: number;
  total_supply: number;
  total_margin?: number; // 계산 필드
  margin_rate?: number; // 계산 필드
  status: QuotationStatus;
  created_at?: string;
}

export interface QuotationItem {
  id: string;
  quotation_id: string;
  part_id: string;
  quantity: number;
  unit_cost_price: number;
  unit_supply_price: number;
  margin_rate: number;
  // 조인 데이터
  part?: Part;
}

export interface BidResultRecord {
  id: string;
  quotation_id: string;
  result: BidResult;
  reason: string;
  recorded_at: string;
}

// --- API 요청/응답 타입 ---

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: { code: string; message: string };
  meta?: { page: number; total: number; limit: number };
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  search?: string;
}

export interface PartsFilterParams extends PaginationParams {
  category_id?: string;
  manufacturer?: string;
}

// --- 폼 입력 타입 ---

export interface SetupFormData {
  email: string;
  password: string;
  name: string;
  phone: string;
  department: string;
  company_name: string;
  business_number: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface UserFormData {
  email: string;
  password: string;
  name: string;
  phone: string;
  department: string;
  role: "admin" | "member";
}

export interface PartFormData {
  category_id: string;
  model_name: string;
  manufacturer: string;
  specs: Record<string, string | number>;
  list_price: number;
  market_price: number;
  cost_price: number;
  supply_price: number;
}

export interface CategoryFormData {
  name: string;
  display_name: string;
  group: CategoryGroup;
  spec_fields: SpecFieldDefinition[];
}

export interface BidResultFormData {
  quotation_id: string;
  result: BidResult;
  reason: string;
}

// --- 대시보드 타입 ---

export interface DashboardSummary {
  in_progress: number;
  completed: number;
  won: number;
  monthly_win_rate: number;
}

export interface BidHistoryStats {
  total_win_rate: number;
  average_margin_rate: number;
  total_quotations: number;
  monthly_trend: { month: string; win_rate: number }[];
  failure_reasons: { reason: string; count: number }[];
}
