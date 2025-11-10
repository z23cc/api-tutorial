import TabSwitcher from '@/components/TabSwitcher';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-bg">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 py-6">
        {/* Page Header */}
        <header className="text-center mb-8 p-8 bg-gradient-to-br from-primary to-primary-light rounded-xl text-white shadow-lg">
          <h1 className="flex items-center justify-center gap-3 text-4xl mb-3 font-bold">
            <svg className="w-12 h-12" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
              <path d="M832 64H192c-70.4 0-128 57.6-128 128v640c0 70.4 57.6 128 128 128h640c70.4 0 128-57.6 128-128V192c0-70.4-57.6-128-128-128z" fill="#CC785C"/>
              <path d="M704 320H320c-17.6 0-32 14.4-32 32s14.4 32 32 32h384c17.6 0 32-14.4 32-32s-14.4-32-32-32zM704 480H320c-17.6 0-32 14.4-32 32s14.4 32 32 32h384c17.6 0 32-14.4 32-32s-14.4-32-32-32zM544 640H320c-17.6 0-32 14.4-32 32s14.4 32 32 32h224c17.6 0 32-14.4 32-32s-14.4-32-32-32z" fill="#fff"/>
            </svg>
            Claude Code 使用教程
          </h1>
          <p className="text-lg opacity-95">跟着这个教程,轻松安装并使用 Claude Code 强大的 AI 编程工具</p>
        </header>

        {/* Tab Switcher Component */}
        <TabSwitcher />

        {/* Footer */}
        <footer className="text-center py-8 mt-12 text-neutral-text-light border-t border-gray-200">
          <p>© 2025 Claude Code 使用教程 - 让 AI 助力你的编程之旅</p>
        </footer>
      </div>
    </div>
  );
}
