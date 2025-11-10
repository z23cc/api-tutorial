import Alert from './Alert';
import CodeBlock from './CodeBlock';
import StepCard from './StepCard';
import Collapse from './Collapse';

export default function LinuxContent() {
  return (
    <div>
      <Alert
        type="info"
        icon="ℹ️"
        title="Linux / WSL2 系统 Claude Code 配置指南"
        description="支持主流 Linux 发行版和 WSL2 环境,使用包管理器安装。"
      />

      <StepCard step={1} title="安装 Node.js 环境" color="#CC785C">
        <Collapse title="Ubuntu/Debian">
          <CodeBlock
            title="# 使用 NodeSource 仓库"
            code={`curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs`}
          />
        </Collapse>

        <Collapse title="CentOS/RHEL">
          <CodeBlock
            title="# 安装 Node.js"
            code={`curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -
sudo yum install -y nodejs`}
          />
        </Collapse>

        <Collapse title="Arch Linux">
          <CodeBlock code="sudo pacman -S nodejs npm" />
        </Collapse>
      </StepCard>

      <StepCard step={2} title="安装 Claude Code" color="#d4a37f">
        <CodeBlock
          title="# 全局安装 Claude Code"
          code="npm install -g @anthropic-ai/claude-code"
        />

        <Alert type="warning" icon="⚠️" title="权限问题解决">
          <div>
            <p className="mb-2">如果遇到 EACCES 权限错误,配置 npm 使用用户目录:</p>
            <CodeBlock
              code={`mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc`}
            />
          </div>
        </Alert>

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
          title="# 添加到 ~/.bashrc"
          code={`echo 'export ANTHROPIC_BASE_URL="https://api-key.info"' >> ~/.bashrc
echo 'export ANTHROPIC_AUTH_TOKEN="你的API密钥"' >> ~/.bashrc
source ~/.bashrc`}
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
