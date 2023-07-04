import { Form, InputGroup, Button } from "react-bootstrap";

import { LuSearch } from "react-icons/lu";
import { RiArrowRightFill } from "react-icons/ri";

import Link from "next/link";

export default function blogSidebar() {
  return (
    <>
      <div className="search-sidebar">
        <div
          className="blog-search-cover"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <h4>Search</h4>
          <div className="search-form">
            <InputGroup>
              <Form.Control placeholder="Search" />
              <Button className="btn btn-shine btn-send" href="#">
                <LuSearch />
              </Button>
            </InputGroup>
          </div>
        </div>
        <div
          className="recent-post-cover"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <div className="recent-post-hd">
            <h4>Recent Post</h4>
          </div>
          <div className="recent-post-list">
            <div className="rec-post-item">
              <Link className="rec-post-link" href="/Blog-GPT">
                <div className="icon">
                  <RiArrowRightFill />
                </div>
                <p>Unleashing the Power of GPT-4 and the Future of ChatGPT</p>
                <div className="post-date">30 Jun 2023</div>
              </Link>
            </div>
            <div className="rec-post-item">
              <Link className="rec-post-link" href="/Blog-Business-Growth">
                <div className="icon">
                  <RiArrowRightFill />
                </div>
                <p>
                  A Paradigm Shift in Business Growth: How Social Media
                  Transcends Entertainment?
                </p>
                <div className="post-date">23 Jun 2023</div>
              </Link>
            </div>
            <div className="rec-post-item">
              <Link className="rec-post-link" href="/Blog-Social-Platforms">
                <div className="icon">
                  <RiArrowRightFill />
                </div>
                <p>
                  Choosing the Right Social Platforms: Reaching Your Target
                  Audience with Precision
                </p>
                <div className="post-date">16 Jun 2023</div>
              </Link>
            </div>
            <div className="rec-post-item">
              <Link className="rec-post-link" href="/Blog-Digital-Marketing">
                <div className="icon">
                  <RiArrowRightFill />
                </div>
                <p>
                  Riding the Wave: Unveiling the Latest Trends in Digital
                  Marketing
                </p>
                <div className="post-date">9 Jun 2023</div>
              </Link>
            </div>
            <div className="rec-post-item">
              <Link className="rec-post-link" href="/Blog-Content-Power">
                <div className="icon">
                  <RiArrowRightFill />
                </div>
                <p>
                  The Superpowers of Content: Identifying the Crucial Role of
                  Content in the Growth of Business
                </p>
                <div className="post-date">2 Jun 2023</div>
              </Link>
            </div>
            <div className="rec-post-item">
              <Link className="rec-post-link" href="/Blog-Sales">
                <div className="icon">
                  <RiArrowRightFill />
                </div>
                <p>
                  Here are some steps to create content that can help drive
                  sales:
                </p>
                <div className="post-date">26 May 2023</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
