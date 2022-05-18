import axios from "axios";
import React, { useState, useEffect } from "react";
import "./page.css";
import LinkTo from "./projectimages/LinkTo.png";

const PostsPage = () => {
  const [postList, setPostList] = useState([]);

  function countWords(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi, "");
    str = str.replace(/[ ]{2,}/gi, " ");
    str = str.replace(/\n /, "\n");
    return str.split(" ").length;
  }
  useEffect(() => {
    axios
      .get(
        "https://ghost-blog.ipxp.in/ghost/api/v4/content/posts/?key=8196190b08906dda0ebf6e6f5d"
      )
      .then(function (response) {
        console.log("Posts Data", response.data.posts);

        setPostList(response.data.posts);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(
        "https://ghost-blog.ipxp.in/ghost/api/v4/content/authors/?key=8196190b08906dda0ebf6e6f5d"
      )
      .then(function (response) {
        console.log("authors data", response.data.authors);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(
        "https://ghost-blog.ipxp.in/ghost/api/v4/content/pages/?key=8196190b08906dda0ebf6e6f5d"
      )
      .then(function (response) {
        console.log("pages data", response.data.pages);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(
        "https://ghost-blog.ipxp.in/ghost/api/v4/content/tags/?key=8196190b08906dda0ebf6e6f5d"
      )
      .then(function (response) {
        console.log("tags data", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return (
    <div>
      <div className="row">
        <div className="col-xl-11 mx-auto  card-background p-5 mt-5">
          <p className="text-center mt-5 mb-5 main-heading-text">POST PAGE</p>
          <p className="text-center title-text-count mt-4">
            Click on any item to see more details
          </p>
          <br></br>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-5 col-10 mx-auto  posts-card-style p-3">
              <p className="text-center title-text">
                List of post Without Meta Description
              </p>

              <div className="row ">
                {postList &&
                  postList.map((item) => (
                    <>
                      <div className="col-xl-10 ">
                        {item.meta_description == null ? (
                          <p className="post-description-text underline-style p-2">
                            {item.title}
                          </p>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="col-xl-2 mt-2">
                        {item.meta_description == null ? (
                          <a href={item.url} target="_blank" rel="noreferrer">
                            <img
                              src={LinkTo}
                              alt=""
                              style={{ height: "25px", width: "25px" }}
                            ></img>
                          </a>
                        ) : (
                          <></>
                        )}
                      </div>
                    </>
                  ))}
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-5 col-10 mx-auto  posts-card-style p-3">
              <p className="text-center title-text">
                Too long Meta Description
              </p>
              <div className="row">
                {postList &&
                  postList.map((item) => (
                    <>
                      <div className="col-xl-10 ">
                        <p>
                          {item.meta_description !== null &&
                          countWords(item.meta_description) > 15 ? (
                            <p className="post-description-text underline-style p-2">
                              {item.title}
                            </p>
                          ) : (
                            <></>
                          )}
                        </p>
                      </div>
                      <div className="col-xl-2 mt-2">
                        {item.meta_description !== null &&
                        countWords(item.meta_description) > 15 ? (
                          <a href={item.url} target="_blank" rel="noreferrer">
                            <img
                              src={LinkTo}
                              alt=""
                              style={{ height: "25px", width: "25px" }}
                            ></img>
                          </a>
                        ) : (
                          <></>
                        )}
                      </div>
                    </>
                  ))}
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-5 col-10 mx-auto  posts-card-style p-3">
              <p className="text-center title-text">
                Too short Posts below 250 words
              </p>

              <div className="row">
                {postList &&
                  postList.map((item) => (
                    <>
                      <div className="col-xl-10 ">
                        {item.meta_description !== null &&
                        item.meta_description.length < 250 ? (
                          <p className="post-description-text underline-style p-2">
                            {item.title}
                          </p>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="col-xl-2 ">
                        {item.meta_description !== null &&
                        item.meta_description.length < 250 ? (
                          <a href={item.url} target="_blank" rel="noreferrer">
                            <img
                              src={LinkTo}
                              alt=""
                              style={{ height: "25px", width: "25px" }}
                            ></img>
                          </a>
                        ) : (
                          <></>
                        )}
                      </div>
                    </>
                  ))}
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-xl-3 col-lg-3 col-md-5 col-10 mx-auto  posts-card-style">
              <p className="text-center title-text">
                List of Posts without Featured Image
              </p>

              <div className="row">
                {postList &&
                  postList.map((item) => (
                    <>
                      <div className="col-xl-10 ">
                        {item.feature_image == null ? (
                          <p>{item.title}</p>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="col-xl-2 ">
                        {item.feature_image == null ? (
                          <a href={item.url} target="_blank" rel="noreferrer">
                            <img
                              src={LinkTo}
                              alt=""
                              style={{ height: "25px", width: "25px" }}
                            ></img>
                          </a>
                        ) : (
                          <></>
                        )}
                      </div>
                    </>
                  ))}
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-5 col-10 mx-auto  posts-card-style">
              <p className="text-center title-text">
                Too long URL, more than 100 chars
              </p>

              <div className="row">
                {postList &&
                  postList.map((item) => (
                    <>
                      <div className="col-xl-10 ">
                        {item.url !== null && item.url.length > 100 ? (
                          <p>{item.title}</p>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="col-xl-2 ">
                        {item.url !== null && item.url.length > 100 ? (
                          <a href={item.url} target="_blank" rel="noreferrer">
                            <img
                              src={LinkTo}
                              alt=""
                              style={{ height: "25px", width: "25px" }}
                            ></img>
                          </a>
                        ) : (
                          <></>
                        )}
                      </div>
                    </>
                  ))}
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-5 col-10 mx-auto  posts-card-style">
              <p className="text-center title-text">
                Too Long Posts, more than 1500 words
              </p>

              <div className="row">
                {postList &&
                  postList.map((item) => (
                    <>
                      <div className="col-xl-10 col-lg-10 col-md-10 col-10 ">
                        {item.meta_description !== null &&
                        item.meta_description.length > 1500 ? (
                          <p>{item.title}</p>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-2 col-2">
                        {item.meta_description !== null &&
                        item.meta_description.length > 1500 ? (
                          <a href={item.url} target="_blank" rel="noreferrer">
                            <img
                              src={LinkTo}
                              alt=""
                              style={{ height: "25px", width: "25px" }}
                            ></img>
                          </a>
                        ) : (
                          <></>
                        )}
                      </div>
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsPage;
