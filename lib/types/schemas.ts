import { z } from "zod";

// --- 인증 스키마 ---

export const setupSchema = z.object({
  email: z.string().email("올바른 이메일을 입력하세요"),
  password: z.string().min(8, "비밀번호는 8자 이상이어야 합니다"),
  name: z.string().min(1, "이름을 입력하세요"),
  phone: z.string().min(1, "전화번호를 입력하세요"),
  department: z.string().min(1, "부서명을 입력하세요"),
  company_name: z.string().min(1, "회사명을 입력하세요"),
  business_number: z.string().min(1, "사업자등록번호를 입력하세요"),
});

export const loginSchema = z.object({
  email: z.string().email("올바른 이메일을 입력하세요"),
  password: z.string().min(1, "비밀번호를 입력하세요"),
});

// --- 사용자 관리 스키마 ---

export const userSchema = z.object({
  email: z.string().email("올바른 이메일을 입력하세요"),
  password: z.string().min(8, "비밀번호는 8자 이상이어야 합니다"),
  name: z.string().min(1, "이름을 입력하세요"),
  phone: z.string().min(1, "전화번호를 입력하세요"),
  department: z.string().min(1, "부서명을 입력하세요"),
  role: z.enum(["admin", "member"], {
    required_error: "역할을 선택하세요",
  }),
});

// --- 부품 관리 스키마 ---

export const partSchema = z.object({
  category_id: z.string().min(1, "카테고리를 선택하세요"),
  model_name: z.string().min(1, "모델명을 입력하세요"),
  manufacturer: z.string().min(1, "제조사를 입력하세요"),
  specs: z.record(z.union([z.string(), z.number()])),
  list_price: z.number().min(0, "리스트가는 0 이상이어야 합니다"),
  market_price: z.number().min(0, "시장가는 0 이상이어야 합니다"),
  cost_price: z.number().min(0, "원가는 0 이상이어야 합니다"),
  supply_price: z.number().min(0, "공급가는 0 이상이어야 합니다"),
});

// --- 카테고리 관리 스키마 ---

export const specFieldSchema = z.object({
  key: z.string().min(1),
  label: z.string().min(1),
  type: z.enum(["text", "number", "select"]),
  options: z.array(z.string()).optional(),
  unit: z.string().optional(),
});

export const categorySchema = z.object({
  name: z.string().min(1, "카테고리명을 입력하세요").regex(/^[a-z_]+$/, "영문 소문자와 언더스코어만 사용 가능합니다"),
  display_name: z.string().min(1, "표시명을 입력하세요"),
  group: z.enum(["server_parts", "network_infra"], {
    required_error: "그룹을 선택하세요",
  }),
  spec_fields: z.array(specFieldSchema).min(1, "스펙 필드를 1개 이상 정의하세요"),
});

// --- 낙찰 결과 스키마 ---

export const bidResultSchema = z.object({
  quotation_id: z.string().min(1),
  result: z.enum(["won", "lost"], {
    required_error: "결과를 선택하세요",
  }),
  reason: z.string().min(1, "사유를 입력하세요"),
});

// --- 타입 추출 ---

export type SetupFormValues = z.infer<typeof setupSchema>;
export type LoginFormValues = z.infer<typeof loginSchema>;
export type UserFormValues = z.infer<typeof userSchema>;
export type PartFormValues = z.infer<typeof partSchema>;
export type CategoryFormValues = z.infer<typeof categorySchema>;
export type BidResultFormValues = z.infer<typeof bidResultSchema>;
