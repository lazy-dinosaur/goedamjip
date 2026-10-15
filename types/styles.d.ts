// 전역 CSS의 side-effect import를 TypeScript 모듈로 인식
// CSS Module의 클래스 타입은 Next.js 기본 선언을 사용
// 이 파일은 export 없이 전역 ambient 선언으로 유지
declare module "*.css" {}
