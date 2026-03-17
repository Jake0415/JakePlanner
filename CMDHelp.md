# 커맨드 도움말

이 프로젝트에서 사용할 수 있는 터미널 명령어와 Claude Code 커맨드를 정리합니다.

---

## 터미널 명령어 (npm / npx)

### 개발

```bash
npm run dev              # 개발 서버 실행 (Turbopack, http://localhost:3000)
npm run build            # 프로덕션 빌드 (Turbopack)
npm run start            # 프로덕션 서버 실행
```

### 코드 품질

```bash
npm run lint             # ESLint 린트 검사
npx tsc --noEmit         # TypeScript 타입 체크 (빌드 없이)
```

### UI 컴포넌트

```bash
npx shadcn@latest add [component-name]   # shadcn/ui 컴포넌트 추가
```

### Git

```bash
git status               # 변경사항 확인
git add [파일]            # 스테이징
git commit -m "메시지"    # 커밋
git push                 # GitHub에 push
```

### Vercel 배포

```bash
npx vercel               # Vercel에 배포 (CLI)
npx vercel --prod         # 프로덕션 배포
```

---

## Claude Code 슬래시 커맨드

### 기획 (Planning)

| 커맨드 | 설명 | 사용 예시 |
|--------|------|----------|
| `/lead [지시]` | 리더 에이전트가 서브 에이전트를 조율하여 전체 워크플로우 실행 | `/lead 온라인 쇼핑몰을 처음부터 기획해줘` |
| `/plan [기능]` | 개별 기능 구현 계획 수립 (planner 에이전트) | `/plan 사용자 검색 기능` |
| `/research-market [시장]` | 시장 규모, 성장률, 트렌드 조사 | `/research-market 국내 중고거래 시장` |
| `/analyze-service [서비스]` | 특정 서비스의 경쟁/사용자/SWOT 분석 (service-analyst 에이전트) | `/analyze-service 당근마켓` |

### PRD (제품 요구사항)

| 커맨드 | 설명 | 사용 예시 |
|--------|------|----------|
| `/prd-generate [아이디어]` | PRD 작성 (prd-generator 에이전트) → `docs/PRD.md` | `/prd-generate 중고 거래 플랫폼` |
| `/prd-validate [경로]` | PRD 기술적 검증 (prd-validator 에이전트, opus) | `/prd-validate docs/PRD.md` |

### 개발 (Development)

| 커맨드 | 설명 | 사용 예시 |
|--------|------|----------|
| `/verify` | 빌드 + 타입 + 린트 + 테스트 + console.log + TODO/FIXME + Git 상태 종합 검증 | `/verify` |
| `/tdd [기능]` | TDD 사이클 (RED→GREEN→REFACTOR) 강제 실행 | `/tdd 장바구니 금액 계산 함수` |
| `/checkpoint [설명]` | 현재 작업 상태를 체크포인트로 저장 (WIP 커밋) | `/checkpoint 로그인 UI 완성` |
| `/update-roadmap` | ROADMAP.md에서 완료된 Task 체크 및 진행상황 업데이트 | `/update-roadmap` |

### 프로젝트 초기화

| 커맨드 | 설명 | 사용 예시 |
|--------|------|----------|
| `/init-project` | 스타터 킷을 프로덕션 준비 환경으로 초기화 (데모 제거, 문서 업데이트) | `/init-project` |

---

## 에이전트 목록

직접 호출하거나 `/lead`를 통해 자동 호출됩니다.

| 에이전트 | 역할 | 직접 호출 시 |
|---------|------|------------|
| **leader** | 서브 에이전트 조율, 결과 취합, Gate Review | `/lead [지시]` |
| **planner** | 기능 구현 계획 수립 | `/plan [기능]` |
| **architect** | 아키텍처 결정, ADR 작성 | 직접 대화로 호출 |
| **service-analyst** | 시장/경쟁/SWOT 분석 | `/analyze-service [서비스]` |
| **prd-generator** | PRD 작성 (7개 섹션, 기능ID 체계) | `/prd-generate [아이디어]` |
| **prd-validator** | PRD Chain of Thought 기술 검증 | `/prd-validate [경로]` |
| **development-planner** | ROADMAP.md 생성 (구조 우선 접근법) | 직접 대화로 호출 |

---

## 컨텍스트 모드

작업 성격에 따라 Claude의 동작 방식을 전환합니다.

| 컨텍스트 | 용도 | 활성 도구 |
|---------|------|----------|
| **dev** | 기능 구현, 코드 작성 | Edit, Write, Bash |
| **research** | 읽기 전용 탐색, 코드 변경 금지 | Read, Grep, WebSearch |
| **review** | 코드 리뷰 (체크리스트 기반) | Read, Grep |
| **planning** | 서비스 기획, 분석 우선 | WebSearch, WebFetch, Read |

---

## MCP 서버

| MCP | 용도 | 주요 기능 |
|-----|------|----------|
| **sequential-thinking** | 단계적 사고/추론 | 복잡한 문제 분석 시 자동 활용 |
| **context7** | 라이브러리 문서 조회 | 최신 API 문서 실시간 확인 |
| **slack** | Slack 채널 통신 | 메시지 전송/조회 |
| **shrimp-task-manager** | 작업 관리 | Task 생성/추적 |
| **shadcn** | shadcn/ui 관리 | 컴포넌트 검색/추가 |

---

## 빠른 참조

```
기획 시작:     /lead [프로젝트 아이디어]
PRD 작성:      /prd-generate [아이디어]
PRD 검증:      /prd-validate
코드 검증:     /verify
체크포인트:    /checkpoint [설명]
로드맵 업데이트: /update-roadmap
```
