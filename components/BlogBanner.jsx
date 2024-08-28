import React from 'react'

const BlogBanner = () => {
  return (
    <>
      <div className="bg-secondary py-5 px-5">
        <div className="container">
          <div className="p-4 p-md-5 mb-4 text-white rounded bg-blog-color" >
            <div className="col-md-6 px-0">
              <h1>Welcome to my blog</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo saepe natus unde architecto minima, numquam voluptatem dolore, fugit nam aperiam, tenetur maiores adipisci incidunt magnam blanditiis ad mollitia laboriosam doloribus.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-2 mx-2">
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">World</strong>
              <h3 className="mb-0 text-primary fw-bold display-5">Featured post</h3>
              <div className="mb-1 text-primary">Nov 12</div>
              <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="stretched-link">Continue reading</a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogBanner