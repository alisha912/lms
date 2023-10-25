import React from "react";
import { Link } from "react-router-dom";
import Footer from "@/containers/layout/footer";
import Header from "@/containers/layout/header";
import PageHeader from "@/containers/layout/pageheader";
import Pagination from "@/containers/sidebar/pagination";

const blogList = [
  {
    imgUrl: "/blog/01.jpg",
    imgAlt: "Blog Thumb",
    title: "Business Ueporting Rouncil Them Could Plan.",
    desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
    commentCount: "3",
    btnText: "Read More",
    metaList: [
      {
        iconName: "icofont-ui-user",
        text: "Rajib Raj",
      },
      {
        iconName: "icofont-calendar",
        text: "Jun 05,2022",
      },
    ],
  },
  {
    imgUrl: "/blog/02.jpg",
    imgAlt: "Blog Thumb",
    title: "Financial Reporting Qouncil What Could More.",
    desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
    commentCount: "3",
    btnText: "Read More",
    metaList: [
      {
        iconName: "icofont-ui-user",
        text: "Rajib Raj",
      },
      {
        iconName: "icofont-calendar",
        text: "Jun 05,2022",
      },
    ],
  },
  {
    imgUrl: "/blog/03.jpg",
    imgAlt: "Blog Thumb",
    title: "Consulting Reporting Qounc Arei Could More.",
    desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
    commentCount: "3",
    btnText: "Read More",
    metaList: [
      {
        iconName: "icofont-ui-user",
        text: "Rajib Raj",
      },
      {
        iconName: "icofont-calendar",
        text: "Jun 05,2022",
      },
    ],
  },
  {
    imgUrl: "/blog/04.jpg",
    imgAlt: "Blog Thumb",
    title: "Strategic Social Media and of visual design.",
    desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
    commentCount: "3",
    btnText: "Read More",
    metaList: [
      {
        iconName: "icofont-ui-user",
        text: "Rajib Raj",
      },
      {
        iconName: "icofont-calendar",
        text: "Jun 05,2022",
      },
    ],
  },
  {
    imgUrl: "/blog/05.jpg",
    imgAlt: "Blog Thumb",
    title: "Find the Right Path for your Group Course online.",
    desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
    commentCount: "3",
    btnText: "Read More",
    metaList: [
      {
        iconName: "icofont-ui-user",
        text: "Rajib Raj",
      },
      {
        iconName: "icofont-calendar",
        text: "Jun 05,2022",
      },
    ],
  },
  {
    imgUrl: "/blog/06.jpg",
    imgAlt: "Blog Thumb",
    title: "Learn by doing with Real World Projects other countries.",
    desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
    commentCount: "3",
    btnText: "Read More",
    metaList: [
      {
        iconName: "icofont-ui-user",
        text: "Rajib Raj",
      },
      {
        iconName: "icofont-calendar",
        text: "Jun 05,2022",
      },
    ],
  },
  {
    imgUrl: "/blog/07.jpg",
    imgAlt: "Blog Thumb",
    title: "The Importance Of Intrinsic for Students.",
    desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
    commentCount: "3",
    btnText: "Read More",
    metaList: [
      {
        iconName: "icofont-ui-user",
        text: "Rajib Raj",
      },
      {
        iconName: "icofont-calendar",
        text: "Jun 05,2022",
      },
    ],
  },
  {
    imgUrl: "/blog/08.jpg",
    imgAlt: "Blog Thumb",
    title: "A Better Alternative To Grading Student Writing.",
    desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
    commentCount: "3",
    btnText: "Read More",
    metaList: [
      {
        iconName: "icofont-ui-user",
        text: "Rajib Raj",
      },
      {
        iconName: "icofont-calendar",
        text: "Jun 05,2022",
      },
    ],
  },
  {
    imgUrl: "/blog/09.jpg",
    imgAlt: "Blog Thumb",
    title: "The Challenge Global Learning In Public Education.",
    desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
    commentCount: "3",
    btnText: "Read More",
    metaList: [
      {
        iconName: "icofont-ui-user",
        text: "Rajib Raj",
      },
      {
        iconName: "icofont-calendar",
        text: "Jun 05,2022",
      },
    ],
  },
];

const BlogPage = () => {
  return (
    <>
      <Header />
      <PageHeader title={"Our Blog Posts"} curPage={"Blog"} />
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="section-wrapper">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4">
              {blogList.map((val, i) => (
                <div className="col" key={i}>
                  <div className="post-item">
                    <div className="post-inner">
                      <div className="post-thumb">
                        <Link to="/article/1">
                          <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                        </Link>
                      </div>
                      <div className="post-content">
                        <Link to="/article/1">
                          <h4>{val.title}</h4>
                        </Link>
                        <div className="meta-post">
                          <ul className="lab-ul">
                            {val.metaList.map((val, i) => (
                              <li key={i}>
                                <i className={val.iconName}></i>
                                {val.text}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <p>{val.desc}</p>
                      </div>
                      <div className="post-footer">
                        <div className="pf-left">
                          <Link to="article/1" className="lab-btn-text">
                            {val.btnText}{" "}
                            <i className="icofont-external-link"></i>
                          </Link>
                        </div>
                        <div className="pf-right">
                          <i className="icofont-comment"></i>
                          <span className="comment-count">
                            {val.commentCount}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Pagination />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;