# /design-api - API 설계 및 생성

REST API 엔드포인트를 설계하고 버전 관리 규칙을 자동 적용하여 표준 Route 파일을 생성합니다. 이 커맨드는 `api-designer` 에이전트를 호출합니다.

> **자동 적용 규칙**: 모든 API는 `/api/v{N}/` 경로에 생성되며, `ApiResponse<T>` 응답 형식, Zod 입력 검증, 인증 미들웨어가 자동으로 포함됩니다.

## 입력

설계할 API 리소스/기능: $ARGUMENTS

## 설계 절차

### 1단계: 요구사항 분석

사용자 요청에서 리소스, CRUD 범위, 커스텀 액션을 추출합니다. `lib/types/index.ts`에서 관련 데이터 모델을 확인합니다.

### 2단계: 기존 API 분석

`app/api/` 디렉토리를 탐색하여 현재 버전, 중복 엔드포인트, 재사용 가능한 미들웨어를 확인합니다.

### 3단계: 설계안 제시

엔드포인트 목록, 요청/응답 타입, 생성 파일 목록을 구조화하여 사용자에게 제시합니다. 승인 후에만 코드를 생성합니다.

### 4단계: 코드 생성

승인 후 다음 파일을 생성합니다:

- `app/api/v{N}/{resource}/route.ts` — Route Handler
- `app/api/v{N}/{resource}/[id]/route.ts` — 동적 라우트 (필요시)
- `lib/types/index.ts` — 새 타입 추가 (필요시)
- `docs/api-spec.md` — API 스펙 문서 갱신

### 5단계: 완료 보고

생성된 파일, 엔드포인트 목록, 테스트 방법을 안내합니다.

## 예시

- `/design-api parts CRUD`
- `/design-api RFP 업로드 및 파싱`
- `/design-api 견적서 생성 및 확정`
- `/design-api 대시보드 요약 데이터`
- `/design-api 입찰 결과 기록`

## 주의사항

- 버전 없는 `/api/resource` 경로는 생성하지 않습니다
- 기존 API 수정 시 Breaking Change 여부를 먼저 판단합니다
- `lib/types/index.ts`에 이미 정의된 타입을 우선 활용합니다
