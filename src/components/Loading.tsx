export default function Loading() {
  return (
    <div className="h-[100svh] w-full flex items-center justify-center bg-black">
      {/* 로딩 상태에서 보여줄 내용 */}
      <div className="animate-pulse text-[#fbe4fe] text-2xl">Loading...</div>
    </div>
  );
}
