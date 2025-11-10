import Alert from './Alert';
import CodeBlock from './CodeBlock';
import StepCard from './StepCard';

export default function MacOSContent() {
  return (
    <div>
      <Alert
        type="info"
        icon="ℹ️"
        title="macOS 系统 Claude Code 配置指南"
        description="本教程将指导你在 macOS 系统上安装和配置 Claude Code AI 编程工具。主要使用 Terminal 和 export 命令。"
      />

      <StepCard step={1} title="安装 Node.js 环境" color="#CC785C">
        <Alert type="info" icon="ℹ️" title="使用 Homebrew 安装(推荐)">
          <div>
            <CodeBlock
              title="# 安装 Homebrew(如果没有)"
              code='/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"'
            />
            <CodeBlock
              title="# 使用 Homebrew 安装 Node.js"
              code={`brew install node
node --version
npm --version`}
            />
          </div>
        </Alert>
      </StepCard>

      <StepCard step={2} title="安装 Claude Code" color="#d4a37f">
        <CodeBlock
          title="# 全局安装 Claude Code"
          code="npm install -g @anthropic-ai/claude-code"
        />

        <Alert type="success" icon="✅" title="验证 Claude Code 安装">
          <div>
            <p className="mb-2">安装完成后,输入以下命令检查是否安装成功:</p>
            <CodeBlock code="claude --version" />
            <p className="mt-2">如果显示版本号,恭喜你!Claude Code 已经成功安装了。</p>
          </div>
        </Alert>
      </StepCard>

      <StepCard step={3} title="配置 Claude Code 环境变量" color="#e5c8b2">
        <CodeBlock
          title="# 添加到 ~/.zshrc 或 ~/.bash_profile"
          code={`echo 'export ANTHROPIC_BASE_URL="https://api-key.info"' >> ~/.zshrc
echo 'export ANTHROPIC_AUTH_TOKEN="你的API密钥"' >> ~/.zshrc
source ~/.zshrc`}
        />

        <Alert type="info" icon="ℹ️" title="VSCode Claude 插件配置">
          <div>
            <p className="mb-2">如果使用 VSCode 的 Claude 插件,需要在配置文件中进行设置:</p>
            <p className="mb-2"><strong>配置文件位置:</strong><code className="bg-gray-200 px-2 py-0.5 rounded text-sm text-pink-600 font-mono">~/.claude/config.json</code></p>
            <p className="mb-2">💡 如果该文件不存在,请手动创建。</p>
            <CodeBlock
              code={`{
  "primaryApiKey": "apikey"
}`}
            />
          </div>
        </Alert>
      </StepCard>

      <StepCard step={4} title="开始使用 Claude Code" color="#e1bfa5">
        <Alert type="success" icon="🎉" title="恭喜!现在你可以使用 Claude Code 强大的 AI 编程助手了!" description="Claude Code 非常适合复杂的代码重构、架构设计、文档编写和代码审查。" />

        <div className="mt-5 grid grid-cols-1 gap-5">
          <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-5 transition-all hover:border-primary hover:shadow-lg hover:-translate-y-0.5">
            <h4 className="text-xl mb-3 text-gray-800">🤖 Claude Code</h4>
            <CodeBlock code="claude" />
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">适合复杂的代码重构、架构设计、文档编写和代码审查。</p>
          </div>
        </div>
      </StepCard>
    </div>
  );
}
