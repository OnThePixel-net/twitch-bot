<h1 id="twitch-bot">Twitch Bot</h1>
<p>This is a Twitch bot built using <a href="https://github.com/tmijs/tmi.js">tmi.js</a> that interacts with viewers through chat commands and responds to events like follows and subscriptions.</p>
<h2 id="features">Features</h2>
<ul>
<li>Responds to chat commands:<ul>
<li><code>!discord</code> or <code>!dc</code>: Provides a link to the Discord server.</li>
<li><code>!website</code> or <code>!web</code>: Provides a link to the website.</li>
<li><code>!socials</code>: Provides links to social media accounts.</li>
<li><code>!help</code> or <code>!commands</code>: Lists available commands.</li>
</ul>
</li>
<li>Sends a periodic message to join the Discord server.</li>
<li>Responds to follow and subscription events with a thank you message.</li>
</ul>
<h2 id="getting-started">Getting Started</h2>
<h3 id="prerequisites">Prerequisites</h3>
<ul>
<li>Node.js (version 10 or higher)</li>
<li><a href="https://pnpm.io/">pnpm</a></li>
</ul>
<h3 id="installation">Installation</h3>
<ol>
<li><p>Clone the repository:</p>
<pre><code class="lang-sh"> git <span class="hljs-keyword">clone</span> <span class="hljs-title">https</span>://github.com/OnThePixel-net/twitch-bot.git
 cd twitch-bot
</code></pre>
</li>
<li><p>Install dependencies:</p>
<pre><code class="lang-sh"> pnpm <span class="hljs-keyword">install</span>
</code></pre>
</li>
<li><p>Create a <code>.env</code> file in the root directory and add your Twitch credentials:</p>
<pre><code class="lang-env"> <span class="hljs-attr">USERNAME=your_twitch_username</span>
 <span class="hljs-attr">OAUTH_TOKEN=your_oauth_token</span>
</code></pre>
<p>Get the OAuth Token here: <a href="https://twitchapps.com">https://twitchapps.com</a></p>
</li>
</ol>
<h3 id="running-the-bot">Running the Bot</h3>
<p>Start the bot with the following command:</p>
<pre><code class="lang-sh">pnpm <span class="hljs-literal">start</span>
</code></pre>
