# Task 001: 프로젝트 라우트 구조 및 페이지 골격 생성

## 상태
- [x] ✅ 완료

## 개요
Next.js App Router 기반으로 9개 페이지 라우트 구조를 생성하고, 각 페이지에 빈 껍데기 컴포넌트를 배치합니다.
인증 보호 레이아웃과 사이드바 네비게이션 레이아웃의 골격을 구현합니다.

## 관련 PRD 기능
- [F010] 인증 시스템 (초기 설정, 로그인)
- [F011] 초기 설정
- [F012] 대시보드
- [F001] 부품 관리
- [F002] 부품 가격 관리
- [F003] RFP 업로드
- [F004] RFP AI 파싱
- [F005] 견적 생성
- [F006] 마진 시뮬레이션
- [F007] 견적 이력
- [F008] 견적서 출력
- [F009] 낙찰 이력
- [F013] 사용자 관리

## 관련 파일
- `app/page.tsx` — 루트 페이지 (리디렉션 로직)
- `app/setup/page.tsx` — 초기 설정 페이지
- `app/login/page.tsx` — 로그인 페이지
- `app/(auth)/dashboard/page.tsx` — 대시보드
- `app/(auth)/parts/page.tsx` — 부품 관리
- `app/(auth)/rfp/page.tsx` — RFP 업로드
- `app/(auth)/quotation/page.tsx` — 견적 생성
- `app/(auth)/quotation-history/page.tsx` — 견적 이력
- `app/(auth)/bid-history/page.tsx` — 낙찰 이력
- `app/(auth)/users/page.tsx` — 사용자 관리
- `app/(auth)/layout.tsx` — 인증 보호 레이아웃

## 수락 기준
- [x] 9개 페이지 라우트가 모두 생성되어 접근 가능
- [x] 각 페이지에 페이지명과 설명 텍스트가 표시됨
- [x] (auth) 그룹 라우트로 인증 보호 레이아웃 골격이 구현됨
- [x] 사이드바 네비게이션 레이아웃 골격이 구현됨

## 구현 단계
- [x] `/` 루트 페이지 생성 (리디렉션 로직)
- [x] `/setup` 초기 설정 페이지 생성
- [x] `/login` 로그인 페이지 생성
- [x] `(auth)` 그룹 라우트 레이아웃 생성
- [x] `/dashboard` 대시보드 페이지 생성
- [x] `/parts` 부품 관리 페이지 생성
- [x] `/rfp` RFP 업로드 페이지 생성
- [x] `/quotation` 견적 생성 페이지 생성
- [x] `/quotation-history` 견적 이력 페이지 생성
- [x] `/bid-history` 낙찰 이력 페이지 생성
- [x] `/users` 사용자 관리 페이지 생성
- [x] 사이드바 네비게이션 레이아웃 골격 구현 (역할별 메뉴 표시 구조)

## 테스트 체크리스트
- [x] 모든 9개 페이지 라우트 접근 가능 확인
- [x] 각 페이지에 페이지명 텍스트 표시 확인
- [x] (auth) 그룹 라우트 레이아웃 적용 확인

## 참고사항
Phase 1의 첫 번째 작업으로, 이후 모든 페이지 UI 구현의 기반이 됩니다.
