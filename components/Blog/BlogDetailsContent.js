import React from "react";
import ReactMarkdown from "react-markdown";

const BlogDetailsContent = ({
  attributes: {
    author,
    date,
    image: {
      data: {
        attributes: { url: imageUrl },
      },
    },
    longDescription,
  },
}) => {
  return (
    <>
      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className="blog-details-desc">
                <div className="blog-img">
                  <img src={imageUrl} alt="Blog Details Img" />
                </div>

                <ul className="meta-tag">
                  <li>
                    By <a href="#">{author}</a>
                  </li>
                  <li>{date}</li>
                </ul>
                 
                <div className="article-content">
                  <ReactMarkdown>
                    {longDescription}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsContent;
