const portfolioData = {
  about: `
<div class="editor-line"><span class="syntax-comment">-- =============================================</span></div>
<div class="editor-line"><span class="syntax-comment">-- Portfolio Configuration</span></div>
<div class="editor-line"><span class="syntax-comment">-- =============================================</span></div>
<div class="editor-line"></div>
<div class="editor-line"><span class="syntax-keyword">local</span> <span class="syntax-field">M</span> = {}</div>
<div class="editor-line"></div>
<div class="editor-line"><span class="syntax-comment">-- Personal Information</span></div>
<div class="editor-line"><span class="syntax-field">M</span>.<span class="syntax-field">about</span> = {</div>
<div class="editor-line">  <span class="syntax-field">name</span> <span class="syntax-operator">=</span> <span class="syntax-string">"Trapgod1"</span>,</div>
<div class="editor-line">  <span class="syntax-field">role</span> <span class="syntax-operator">=</span> <span class="syntax-string">"Full Stack Developer"</span>,</div>
<div class="editor-line">  <span class="syntax-field">location</span> <span class="syntax-operator">=</span> <span class="syntax-string">"London"</span>,</div>
<div class="editor-line">  <span class="syntax-field">bio</span> <span class="syntax-operator">=</span> <span class="syntax-string">""</span>,</div>
<div class="editor-line">}</div>
<div class="editor-line"></div>
<div class="editor-line"><span class="syntax-comment">-- Areas of Interest</span></div>
<div class="editor-line"><span class="syntax-field">M</span>.<span class="syntax-field">interests</span> <span class="syntax-operator">=</span> {</div>
<div class="editor-line">  <span class="syntax-string">"Servers"</span>,</div>
<div class="editor-line">  <span class="syntax-string">"Networking"</span>,</div>
<div class="editor-line">  <span class="syntax-string">"Open Source"</span>,</div>
<div class="editor-line">  <span class="syntax-string">"System Design"</span>,</div>
<div class="editor-line">  <span class="syntax-string">"Performance Optimization"</span>,</div>
<div class="editor-line">}</div>
<div class="editor-line"></div>
<div class="editor-line"><span class="syntax-keyword">return</span> <span class="syntax-field">M</span></div>
  `,
  skills: `
<div class="editor-line"><span class="syntax-comment">-- =============================================</span></div>
<div class="editor-line"><span class="syntax-comment">-- Skills & Technologies</span></div>
<div class="editor-line"><span class="syntax-comment">-- =============================================</span></div>
<div class="editor-line"></div>
<div class="editor-line"><span class="syntax-comment">-- Languages</span></div>
<div class="editor-line"><span class="syntax-keyword">local</span> <span class="syntax-field">languages</span> <span class="syntax-operator">=</span> { <span class="syntax-string">"Python"</span>, <span class="syntax-string">"TypeScript"</span>, <span class="syntax-string">"HTML5"</span>, <span class="syntax-string">"CSS"</span>, <span class="syntax-string">"JavaScript"</span>, <span class="syntax-string">"Go"</span>, <span class="syntax-string">"SQL"</span> }</div>
<div class="editor-line"></div>
<div class="editor-line"><span class="syntax-comment">-- Frameworks & Libraries</span></div>
<div class="editor-line"><span class="syntax-keyword">local</span> <span class="syntax-field">frameworks</span> <span class="syntax-operator">=</span> { <span class="syntax-string">"Vite"</span>, <span class="syntax-string">"Vue"</span> }</div>
<div class="editor-line"></div>
<div class="editor-line"><span class="syntax-comment">-- Operating Systems</span></div>
<div class="editor-line"><span class="syntax-keyword">local</span> <span class="syntax-field">os</span> <span class="syntax-operator">=</span> { <span class="syntax-string">"Linux"</span>, <span class="syntax-string">"Debian"</span>, <span class="syntax-string">"Ubuntu"</span>, <span class="syntax-string">"Arch Linux"</span>, <span class="syntax-string">"Windows 11"</span> }</div>
<div class="editor-line"></div>
<div class="editor-line"><span class="syntax-comment">-- Virtualization</span></div>
<div class="editor-line"><span class="syntax-keyword">local</span> <span class="syntax-field">virtualization</span> <span class="syntax-operator">=</span> { <span class="syntax-string">"Proxmox"</span> }</div>
<div class="editor-line"></div>
<div class="editor-line"><span class="syntax-comment">-- Tools & Infrastructure</span></div>
<div class="editor-line"><span class="syntax-keyword">local</span> <span class="syntax-field">tools</span> <span class="syntax-operator">=</span> { <span class="syntax-string">"Docker"</span>, <span class="syntax-string">"Kubernetes"</span>, <span class="syntax-string">"Git"</span>, <span class="syntax-string">"GitHub"</span>, <span class="syntax-string">"GitLab"</span>, <span class="syntax-string">"Forgejo"</span>, <span class="syntax-string">"Nginx"</span> }</div>
<div class="editor-line"></div>
<div class="editor-line"><span class="syntax-keyword">return</span> {</div>
<div class="editor-line">  <span class="syntax-field">languages</span>, <span class="syntax-field">frameworks</span>, <span class="syntax-field">os</span>, <span class="syntax-field">virtualization</span>, <span class="syntax-field">tools</span></div>
<div class="editor-line">}</div>
  `,
  projects: `
<div class="editor-line"><span class="syntax-comment">-- =============================================</span></div>
<div class="editor-line"><span class="syntax-comment">-- Featured Projects</span></div>
<div class="editor-line"><span class="syntax-comment">-- =============================================</span></div>
<div class="editor-line"></div>
<div class="editor-line"><span class="syntax-keyword">local</span> <span class="syntax-field">projects</span> <span class="syntax-operator">=</span> {</div>
<div class="editor-line"></div>
<div class="editor-line">  {</div>
<div class="editor-line">    <span class="syntax-field">name</span> <span class="syntax-operator">=</span> <span class="syntax-string">"Hackathon"</span>,</div>
<div class="editor-line">    <span class="syntax-field">description</span> <span class="syntax-operator">=</span> <span class="syntax-string">"2026 Hackathon Project"</span>,</div>
<div class="editor-line">    <span class="syntax-field">tech</span> <span class="syntax-operator">=</span> { <span class="syntax-string">"Go"</span>, <span class="syntax-string">"Python"</span>, <span class="syntax-string">"C++"</span>, <span class="syntax-string">"SQLite"</span> },</div>
<div class="editor-line">    <span class="syntax-field">github</span> <span class="syntax-operator">=</span> <span class="syntax-string"><a href="https://github.com/uni-project-group-123/hackathon" target="_blank" class="contact-link">"https://github.com/uni-project-group-123/hackathon"</a></span>,</div>
<div class="editor-line">    <span class="syntax-field">status</span> <span class="syntax-operator">=</span> <span class="syntax-string">"repo currently private"</span>,</div>
<div class="editor-line">  },</div>
<div class="editor-line">}</div>
<div class="editor-line"></div>
<div class="editor-line"><span class="syntax-keyword">return</span> <span class="syntax-field">projects</span></div>
  `,
  contact: `
<div class="editor-line"><span class="syntax-comment">-- =============================================</span></div>
<div class="editor-line"><span class="syntax-comment">-- Get In Touch</span></div>
<div class="editor-line"><span class="syntax-comment">-- =============================================</span></div>
<div class="editor-line"></div>
<div class="editor-line"><span class="syntax-comment">-- Keybinds: press g + key, or click links</span></div>
<div class="editor-line"></div>
<div class="editor-line">  <span class="syntax-field keybind" data-key="gx"><span class="keybind-prefix">g</span>x</span> <span class="syntax-operator">=</span> <span class="syntax-string"><a href="https://x.com/_Tr4pGod" target="_blank" class="contact-link">"https://x.com/_Tr4pGod"</a></span> <span class="syntax-comment">-- <a href="https://x.com/_Tr4pGod" target="_blank" class="contact-link">twitter</a></span></div>
<div class="editor-line">  <span class="syntax-field keybind" data-key="gd"><span class="keybind-prefix">g</span>d</span> <span class="syntax-operator">=</span> <span class="syntax-string"><a href="https://discord.com/users/858417911563157505" target="_blank" class="contact-link">"https://discord.com/users/858417911563157505"</a></span> <span class="syntax-comment">-- <a href="https://discord.com/users/858417911563157505" target="_blank" class="contact-link">discord</a></span></div>
<div class="editor-line">  <span class="syntax-field keybind" data-key="gh"><span class="keybind-prefix">g</span>h</span> <span class="syntax-operator">=</span> <span class="syntax-string"><a href="https://github.com/trapgod1" target="_blank" class="contact-link">"https://github.com/trapgod1"</a></span>    <span class="syntax-comment">-- <a href="https://github.com/trapgod1" target="_blank" class="contact-link">github</a></span></div>
<div class="editor-line">  <span class="syntax-field">forgejo</span> <span class="syntax-operator">=</span> <span class="syntax-string">"git.local"</span>      <span class="syntax-comment">-- local/vpn only</span></div>
<div class="editor-line"></div>
<div class="editor-line"><span class="syntax-comment">-- Feel free to reach out!</span></div>
  `,
  homelab: `
<div class="editor-line"><span class="syntax-comment">-- =============================================</span></div>
<div class="editor-line"><span class="syntax-comment">-- Homelab</span></div>
<div class="editor-line"><span class="syntax-comment">-- =============================================</span></div>
<div class="editor-line"></div>
<div class="editor-line"><span class="syntax-comment">-- Hardware</span></div>
<div class="editor-line"><span class="syntax-keyword">local</span> <span class="syntax-field">hardware</span> <span class="syntax-operator">=</span> {</div>
<div class="editor-line">  <span class="syntax-string">"3x Dell Optiplex 3060 Micro (Proxmox Cluster)"</span>,</div>
<div class="editor-line">  <span class="syntax-string">"48GB RAM"</span>,</div>
<div class="editor-line">  <span class="syntax-string">"1.5TB SSD Storage"</span>,</div>
<div class="editor-line">}</div>
<div class="editor-line"></div>
<div class="editor-line"><span class="syntax-comment">-- Services</span></div>
<div class="editor-line"><span class="syntax-keyword">local</span> <span class="syntax-field">services</span> <span class="syntax-operator">=</span> {</div>
<div class="editor-line">  <span class="syntax-operator">{</span> <span class="syntax-field">name</span> <span class="syntax-operator">=</span> <span class="syntax-string">"Forgejo"</span>,       <span class="syntax-field">desc</span> <span class="syntax-operator">=</span> <span class="syntax-string">"Self-hosted Git — primary code remote"</span> <span class="syntax-operator">},</span></div>
<div class="editor-line">  <span class="syntax-operator">{</span> <span class="syntax-field">name</span> <span class="syntax-operator">=</span> <span class="syntax-string">"Technitium"</span>,    <span class="syntax-field">desc</span> <span class="syntax-operator">=</span> <span class="syntax-string">"Authoritative DNS with local zone overrides"</span> <span class="syntax-operator">},</span></div>
<div class="editor-line">  <span class="syntax-operator">{</span> <span class="syntax-field">name</span> <span class="syntax-operator">=</span> <span class="syntax-string">"Grafana"</span>,       <span class="syntax-field">desc</span> <span class="syntax-operator">=</span> <span class="syntax-string">"Metrics dashboards pulling from node exporters"</span> <span class="syntax-operator">},</span></div>
<div class="editor-line">  <span class="syntax-operator">{</span> <span class="syntax-field">name</span> <span class="syntax-operator">=</span> <span class="syntax-string">"UptimeKuma"</span>,    <span class="syntax-field">desc</span> <span class="syntax-operator">=</span> <span class="syntax-string">"Service health monitoring across the cluster"</span> <span class="syntax-operator">},</span></div>
<div class="editor-line">  <span class="syntax-operator">{</span> <span class="syntax-field">name</span> <span class="syntax-operator">=</span> <span class="syntax-string">"Immich"</span>,        <span class="syntax-field">desc</span> <span class="syntax-operator">=</span> <span class="syntax-string">"Self-hosted Google Photos alternative"</span> <span class="syntax-operator">},</span></div>
<div class="editor-line">  <span class="syntax-operator">{</span> <span class="syntax-field">name</span> <span class="syntax-operator">=</span> <span class="syntax-string">"AdGuard Home"</span>,   <span class="syntax-field">desc</span> <span class="syntax-operator">=</span> <span class="syntax-string">"Network-wide ad/tracker blocking — fallback DNS if Technitium fails"</span> <span class="syntax-operator">},</span></div>
<div class="editor-line">  <span class="syntax-operator">{</span> <span class="syntax-field">name</span> <span class="syntax-operator">=</span> <span class="syntax-string">"FreshRSS"</span>,      <span class="syntax-field">desc</span> <span class="syntax-operator">=</span> <span class="syntax-string">"RSS/Atom feed aggregator"</span> <span class="syntax-operator">},</span></div>
<div class="editor-line">  <span class="syntax-operator">{</span> <span class="syntax-field">name</span> <span class="syntax-operator">=</span> <span class="syntax-string">"Navidrome"</span>,     <span class="syntax-field">desc</span> <span class="syntax-operator">=</span> <span class="syntax-string">"Subsonic-compatible music server"</span> <span class="syntax-operator">},</span></div>
<div class="editor-line">  <span class="syntax-operator">{</span> <span class="syntax-field">name</span> <span class="syntax-operator">=</span> <span class="syntax-string">"Pterodactyl"</span>,   <span class="syntax-field">desc</span> <span class="syntax-operator">=</span> <span class="syntax-string">"Game server hosting (Wings + Panel)"</span> <span class="syntax-operator">}</span></div>
<div class="editor-line">}</div>
<div class="editor-line"></div>
<div class="editor-line"><span class="syntax-comment">-- Networking</span></div>
<div class="editor-line"><span class="syntax-keyword">local</span> <span class="syntax-field">networking</span> <span class="syntax-operator">=</span> {</div>
<div class="editor-line">  <span class="syntax-operator">{</span> <span class="syntax-field">name</span> <span class="syntax-operator">=</span> <span class="syntax-string">"Tailscale"</span>, <span class="syntax-field">desc</span> <span class="syntax-operator">=</span> <span class="syntax-string">"Mesh VPN — subnet router exposing 192.168.0.0/24 remotely"</span> <span class="syntax-operator">},</span></div>
<div class="editor-line">  <span class="syntax-operator">{</span> <span class="syntax-field">name</span> <span class="syntax-operator">=</span> <span class="syntax-string">"Netbird"</span>,   <span class="syntax-field">desc</span> <span class="syntax-operator">=</span> <span class="syntax-string">"WireGuard-based overlay, secondary remote access"</span> <span class="syntax-operator">}</span></div>
<div class="editor-line">}</div>
<div class="editor-line"></div>
<div class="editor-line"><span class="syntax-keyword">return</span> {</div>
<div class="editor-line">  <span class="syntax-field">hardware</span>, <span class="syntax-field">services</span>, <span class="syntax-field">networking</span></div>
<div class="editor-line">}</div>
  `
};

let currentSection = 'about';
let currentLine = 0;
let mode = 'normal';
let commandBuffer = '';
let searchQuery = '';
let isSearching = false;
let pendingG = false;

const editorContent = document.getElementById('editor-content');
const gutter = document.getElementById('gutter');
const commandBar = document.getElementById('command-bar');
const commandInput = document.getElementById('command-input');
const commandOutput = document.getElementById('command-output');
const vimHelp = document.getElementById('vim-help');
const overlay = document.getElementById('overlay');
const tabs = document.querySelectorAll('.tab');
const statusLeft = document.querySelector('.status-left .status-item span:last-child');
const sections = ['about', 'skills', 'projects', 'contact', 'homelab'];

function updateGutter() {
  const lines = editorContent.querySelectorAll('.editor-line');
  let gutterHTML = '';
  lines.forEach((_, index) => {
    const relNum = Math.abs(index - currentLine);
    const isCurrent = index === currentLine;
    gutterHTML += `<div class="gutter-line${isCurrent ? ' current' : ''}${!isCurrent ? ' relative' : ''}">${isCurrent ? index + 1 : relNum}</div>`;
  });
  gutter.innerHTML = gutterHTML;
}

function renderContent(section) {
  currentSection = section;
  currentLine = 0;
  editorContent.innerHTML = portfolioData[section] || '<div class="editor-line">File not found</div>';
  
  tabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.section === section);
  });

  const tabIndex = sections.indexOf(section) + 1;
  document.querySelector('.status-right .status-item:first-child span').textContent = `Tab ${tabIndex}/${sections.length}`;
  
  const sectionNames = {
    about: 'about.lua',
    skills: 'skills.lua',
    projects: 'projects.lua',
    contact: 'contact.lua',
    homelab: 'homelab.lua'
  };
  document.querySelector('.title-bar-left span:last-child').textContent = `~/.config/nvim/lua/${sectionNames[section]}`;
  
  updateGutter();
}

function updateCursor() {
  const lines = editorContent.querySelectorAll('.editor-line');
  lines.forEach((line, index) => {
    line.classList.toggle('cursor-line', index === currentLine);
  });
  
  document.querySelector('.status-right .status-item:nth-child(2) span').textContent = `Ln ${currentLine + 1}, Col 1`;
  updateGutter();
}

function navigateUp() {
  const lines = editorContent.querySelectorAll('.editor-line');
  if (currentLine > 0) {
    currentLine--;
    updateCursor();
    scrollToLine();
  }
}

function navigateDown() {
  const lines = editorContent.querySelectorAll('.editor-line');
  if (currentLine < lines.length - 1) {
    currentLine++;
    updateCursor();
    scrollToLine();
  }
}

function scrollToLine() {
  const lines = editorContent.querySelectorAll('.editor-line');
  if (lines[currentLine]) {
    lines[currentLine].scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function goToTop() {
  currentLine = 0;
  updateCursor();
  scrollToLine();
}

function goToBottom() {
  const lines = editorContent.querySelectorAll('.editor-line');
  currentLine = lines.length - 1;
  updateCursor();
  scrollToLine();
}

function openCommandBar() {
  mode = 'command';
  commandBar.classList.add('visible');
  statusLeft.textContent = 'Command';
  commandInput.value = '';
  commandInput.focus();
}

function closeCommandBar() {
  mode = 'normal';
  commandBar.classList.remove('visible');
  commandOutput.classList.remove('visible');
  statusLeft.textContent = 'Normal';
  commandInput.value = '';
}

function executeCommand(cmd) {
  const commands = {
    'q': 'Not quitting (this is a portfolio!)',
    'quit': 'Not quitting (this is a portfolio!)',
    'w': 'Saved!',
    'write': 'Saved!',
    'help': 'Available: :q, :w, :help, :contact, :projects, :skills, :about, :homelab',
    'homelab': (() => { renderContent('homelab'); return 'Opened homelab.lua'; })(),
    'contact': (() => { renderContent('contact'); return 'Opened contact.lua'; })(),
    'projects': (() => { renderContent('projects'); return 'Opened projects.lua'; })(),
    'skills': (() => { renderContent('skills'); return 'Opened skills.lua'; })(),
    'about': (() => { renderContent('about'); return 'Opened about.lua'; })(),
  };
  
  const result = commands[cmd];
  if (result !== undefined) {
    commandOutput.textContent = result;
    commandOutput.classList.add('visible');
    setTimeout(() => commandOutput.classList.remove('visible'), 3000);
  } else {
    commandOutput.textContent = `E492: Not an editor command: ${cmd}`;
    commandOutput.classList.add('visible');
    setTimeout(() => commandOutput.classList.remove('visible'), 2000);
  }
}

function showHelp() {
  mode = 'help';
  vimHelp.classList.add('visible');
  overlay.classList.add('visible');
}

function hideHelp() {
  mode = 'normal';
  vimHelp.classList.remove('visible');
  overlay.classList.remove('visible');
}

document.addEventListener('keydown', (e) => {
  if (mode === 'command') {
    if (e.key === 'Escape') {
      closeCommandBar();
    } else if (e.key === 'Enter') {
      const cmd = commandInput.value.trim().toLowerCase();
      executeCommand(cmd);
      setTimeout(closeCommandBar, cmd === 'q' || cmd === 'quit' ? 0 : 1500);
    }
    return;
  }

  if (mode === 'help') {
    if (e.key === 'Escape' || e.key === '?') {
      hideHelp();
    }
    return;
  }

  if (e.key === 'Escape') {
    if (isSearching) {
      isSearching = false;
      searchQuery = '';
      return;
    }
    if (pendingG) {
      pendingG = false;
      statusLeft.textContent = 'Normal';
      document.querySelectorAll('.keybind-prefix').forEach(el => {
        el.classList.remove('keybind-waiting');
      });
      return;
    }
    commandBuffer = '';
    return;
  }

  if (e.key === ':') {
    openCommandBar();
    return;
  }

  if (e.key === '?') {
    showHelp();
    return;
  }

  if (e.key === 'j') {
    navigateDown();
    return;
  }

  if (e.key === 'k') {
    navigateUp();
    return;
  }

  if (e.key >= '1' && e.key <= '5') {
    const index = parseInt(e.key) - 1;
    if (sections[index]) {
      renderContent(sections[index]);
    }
    return;
  }

  if (currentSection === 'contact') {
    const contactLinks = {
      'h': { url: 'https://github.com/trapgod1', type: 'url' },
      'x': { url: 'https://x.com/_Tr4pGod', type: 'url' },
      'd': { url: 'https://discord.com/users/858417911563157505', type: 'url' },
    };
    
    if (e.key in contactLinks) {
      const { url, type } = contactLinks[e.key];
      commandOutput.textContent = `Opening ${e.key}...`;
      commandOutput.classList.add('visible');
      setTimeout(() => commandOutput.classList.remove('visible'), 1000);
      
      setTimeout(() => {
        if (type === 'email') {
          window.location.href = `mailto:${url}`;
        } else {
          window.open(url, '_blank');
        }
      }, 100);
      return;
    }
  }

  if (currentSection === 'contact' && e.key === 'g') {
    pendingG = true;
    statusLeft.textContent = 'g';
    document.querySelectorAll('.keybind-prefix').forEach(el => {
      el.classList.add('keybind-waiting');
    });
    return;
  }

  if (pendingG) {
    const gKeyMap = {
      'h': 'https://github.com/trapgod1',
      'x': 'https://x.com/_Tr4pGod',
      'd': 'https://discord.com/users/858417911563157505',
    };
    
    const keybindKey = 'g' + e.key;
    const matchingKeybind = document.querySelector(`.keybind[data-key="${keybindKey}"]`);
    
    if (matchingKeybind) {
      const prefix = matchingKeybind.querySelector('.keybind-prefix');
      prefix.classList.remove('keybind-waiting');
      prefix.classList.add('keybind-active');
      
      const url = gKeyMap[e.key];
      
      setTimeout(() => {
        if (url.includes('@')) {
          window.location.href = `mailto:${url}`;
        } else {
          window.open(url, '_blank');
        }
      }, 150);
    }
    
    document.querySelectorAll('.keybind-prefix').forEach(el => {
      el.classList.remove('keybind-waiting');
    });
    
    pendingG = false;
    statusLeft.textContent = 'Normal';
    return;
  }

  if (e.key === 'G' && !e.shiftKey) {
    if (commandBuffer === 'g') {
      goToTop();
      commandBuffer = '';
    } else {
      commandBuffer = 'G';
      setTimeout(() => { if (commandBuffer === 'G') commandBuffer = ''; }, 500);
    }
    return;
  }

  if (e.key === 'G' && e.shiftKey) {
    goToBottom();
    return;
  }
});

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    renderContent(tab.dataset.section);
  });
});

overlay.addEventListener('click', hideHelp);

renderContent('about');
updateCursor();
