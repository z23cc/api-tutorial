import Alert from './Alert';
import CodeBlock from './CodeBlock';
import StepCard from './StepCard';

export default function WindowsContent() {
  return (
    <div>
      <Alert
        type="info"
        icon="ℹ️"
        title="Windows 系统 Claude Code 配置指南"
        description="本教程将指导你在 Windows 系统上安装和配置 Claude Code AI 编程工具。"
      />

      <StepCard step={1} title="安装 Node.js 环境" color="#CC785C">
        <p className="mb-3">Claude Code 需要 Node.js 环境才能运行。</p>

        <Alert type="info" icon="ℹ️" title="Windows 安装方法">
          <div>
            <p className="mb-2"><strong>方法一:官网下载(推荐)</strong></p>
            <ol className="ml-6 mb-4 space-y-2">
              <li>打开浏览器访问 <code className="bg-gray-200 px-2 py-0.5 rounded text-sm text-pink-600 font-mono">https://nodejs.org/</code></li>
              <li>点击 &quot;LTS&quot; 版本进行下载(推荐长期支持版本)</li>
              <li>下载完成后双击 <code className="bg-gray-200 px-2 py-0.5 rounded text-sm text-pink-600 font-mono">.msi</code> 文件</li>
              <li>按照安装向导完成安装,保持默认设置即可</li>
            </ol>

            <p className="mb-2"><strong>方法二:使用包管理器</strong></p>
            <CodeBlock
              title="# 使用 Chocolatey 或 Scoop"
              code={`choco install nodejs
# 或使用 Scoop
scoop install nodejs`}
            />
          </div>
        </Alert>

        <Alert type="success" icon="✅" title="验证安装是否成功">
          <div>
            <p className="mb-2">安装完成后,打开 PowerShell 或 CMD,输入以下命令:</p>
            <CodeBlock
              code={`node --version
npm --version`}
            />
            <p className="mt-2">如果显示版本号,说明安装成功了!</p>
          </div>
        </Alert>
      </StepCard>

      <StepCard step={2} title="安装 Claude Code" color="#d4a37f">
        <p className="mb-3">打开 PowerShell 或 CMD,运行以下命令:</p>
        <CodeBlock
          title="# 全局安装 Claude Code"
          code="npm install -g @anthropic-ai/claude-code"
        />
        <p className="mb-3">这个命令会从 npm 官方仓库下载并安装最新版本的 Claude Code。</p>

        <Alert type="success" icon="✅" title="验证 Claude Code 安装">
          <div>
            <p className="mb-2">安装完成后,输入以下命令检查是否安装成功:</p>
            <CodeBlock code="claude --version" />
            <p className="mt-2">如果显示版本号,恭喜你!Claude Code 已经成功安装了。</p>
          </div>
        </Alert>
      </StepCard>

      <StepCard step={3} title="配置 Claude Code 环境变量" color="#e5c8b2">
        <Alert type="warning" icon="⚠️" title="重要说明" description="为了让 Claude Code 连接到中转服务,需要设置环境变量。" />

        <h4 className="mt-4 mb-3 text-gray-800 text-lg font-semibold">方法一:PowerShell 临时设置(当前会话)</h4>
        <CodeBlock
          code={`$env:ANTHROPIC_BASE_URL = "https://api-key.info"
$env:ANTHROPIC_AUTH_TOKEN = "你的API密钥"`}
        />

        <h4 className="mt-4 mb-3 text-gray-800 text-lg font-semibold">方法二:PowerShell 永久设置(用户级)</h4>
        <CodeBlock
          title="# 设置用户级环境变量(永久生效)"
          code={`[System.Environment]::SetEnvironmentVariable("ANTHROPIC_BASE_URL", "https://api-key.info", [System.EnvironmentVariableTarget]::User)
[System.Environment]::SetEnvironmentVariable("ANTHROPIC_AUTH_TOKEN", "你的API密钥", [System.EnvironmentVariableTarget]::User)`}
        />

        <Alert type="info" icon="ℹ️" title="验证 Claude Code 环境变量">
          <CodeBlock
            code={`echo $env:ANTHROPIC_BASE_URL
echo $env:ANTHROPIC_AUTH_TOKEN`}
          />
        </Alert>

        <Alert type="info" icon="ℹ️" title="VSCode Claude 插件配置">
          <div>
            <p className="mb-2">如果使用 VSCode 的 Claude 插件,需要在配置文件中进行设置:</p>
            <p className="mb-2"><strong>配置文件位置:</strong><code className="bg-gray-200 px-2 py-0.5 rounded text-sm text-pink-600 font-mono">C:\Users\你的用户名\.claude\config.json</code></p>
            <p className="mb-2">💡 如果该文件不存在,请手动创建。</p>
            <CodeBlock
              code={`{
  "primaryApiKey": "apikey"
}`}
            />
          </div>
        </Alert>

        <Alert type="success" icon="💡" title="小贴士" description="设置完成后,记得重新打开 PowerShell 窗口以使永久环境变量生效。" />
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
