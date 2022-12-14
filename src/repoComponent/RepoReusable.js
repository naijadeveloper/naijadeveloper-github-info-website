

const RepoResuable = ({currentRepos, openPageForOneRepo}) => {

  return (
    <div>
      {currentRepos.map(repo => (
        <article key={repo.id} className="repo" onClick={() => {
          if(openPageForOneRepo) {
            return openPageForOneRepo(repo.id)
          }
          }}>
          <div className="repo-header">
            <h1 className="repo-fullname">
              <p>#️⃣ {repo.name}</p>
            </h1>
          </div>

          <div className="repo-body">
            {repo.description? (
              <p className="repo-description">{repo.description}</p>) : (<p className="repo-description">There is no description for this repository</p>)
            }
          </div>

          <div className="repo-footer">
            {repo.language && (
              <span className="repo-footer-span languages">{repo.language}</span>
            )}
            <span className="repo-footer-span go-to-github"><a href={repo.svn_url}>View on github</a></span>
            {repo.homepage && (
              <span className="repo-footer-span preview-website"><a href={repo.homepage}>Hosted site</a></span>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}

export default RepoResuable;