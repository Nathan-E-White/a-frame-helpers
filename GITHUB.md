# GitHub Review

<p>This document is a review of how to complete a few basic tasks in GitHub.</p>
<hr>
<h2>Configuration</h2><br>
<h3>Setting your name and email</h3>

```shell
$ git config --global user.name "Your Name";
$ git config --global user.email "Your Email";
```

<h3>Authentication</h3>
<p>To authenticate your <code>gh</code> instance with your GitHub account, you can run:<br></p>

```shell
$ gh auth login;
```
<p>Running <code><a href="https://cli.github.com/manual/gh_auth_login">gh auth login</a></code> 
will authenticate your GitHub account. Note that if the <a href="https://cli.github.com/manual/gh_help_environment">environmental variable</a>
<code>GITHUB_TOKEN</code> has been set, this command will not override it.</p>

<h3>Aliasing</h3>
<p>One can define words that expand to full <code>gh</code> commands when invoked.</p>

<br>

```shell    
$ gh alias set <alias> <expansion> [flags];
``` 

<h4>Options</h4>
<ul>
<item>
<code>-s</code> or <code>--shell</code>: Declare that an alias shall be passed through the shell's interpreter.
</item>
</ul>
<h5>Examples</h5>

```shell
$ gh alias set gh-review "gh pr list --state=open --author=<your-username>";
```
<p>Then, you can use <code>gh-review</code> to view your open pull requests.</p>

```shell
$ gh alias set pv 'pr view'
$ gh pv -w 123
```
<p>The <code>-w</code> flag will open the pull request in a new window.</p>

```shell
gh alias set pr-view "gh pr view --browser";
gh pr-view
```
<p>The <code>--browser</code> flag will open the pull request in a new browser window.</p>

```shell
$ gh alias set bugs "issue list --label=bugs"
$ gh bugs
```
<p>The <code>bugs</code> alias will list all issues with the <code>bugs</code> label.</p>

```shell
$ gh alias set homework 'issue list --assignee @me'
$ gh homework
```
<p>The <code>homework</code> alias will list all issues assigned to me.</p>

```shell
$ gh alias set epicsBy 'issue list --author="$1" --label="epic"';
$ gh epicsBy <your-username>
```

```shell
$ gh alias set --shell igrep 'gh issue list --label="$1" | grep "$2"';
$ gh igrep "epic" "foo"
```

<hr>
<h2>Creating new things<br></h2>
<h3>Create a repository<br></h3>
<h3>Create a branch<br></h3>

<hr>
<h2>Editing your project<br></h2>

<h3>Add files</h3>
<h3>Commit files</h3>

<h3>Check file status</h3>

<p>Enter <code lang="shell">git status</code>. You will see that you have untracked changes.</p>

```shell
git status;
```
<h3>Stage and commit the file.</h3>
```shell
git add README.md && git commit -m "Added README.md...";
```

<h3>Push the changes to your branch.</h3>
```shell
git push --set-upstream origin HEAD;
```

<h2>Deletions</h2>
<h3>12. Delete branch</h3>
<h3>13. Delete repository</h3>

