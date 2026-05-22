import { Link } from 'react-router-dom';
import { FaQuoteLeft, FaBookOpen, FaArrowRight, FaNewspaper, FaWhatsapp, FaPenFancy, FaStar, FaHeart, FaChild, FaGraduationCap, FaUsers } from 'react-icons/fa';

function Blog() {
  const blogConnections = [
    {
      story: "My daughter used to struggle with anxiety before school. After three months in the Saturday program, she prays every morning and walks into class with confidence. God is working through Decent Humans.",
      author: "— Mary, mother of 9-year-old",
      icon: FaHeart,
      blogPost: {
        title: "Understanding Childhood Anxiety Through Faith",
        excerpt: "How prayer routines transformed one family's mornings",
        slug: "childhood-anxiety-faith",
        readTime: "5 min read"
      }
    },
    {
      story: "As a volunteer mentor, I've seen children who couldn't look you in the eye now lead prayer sessions. The Growth Journey works because it's rooted in scripture AND practical care.",
      author: "— James, Mentor for 2 years",
      icon: FaUsers,
      blogPost: {
        title: "The Power of Mentorship: A Volunteer's Perspective",
        excerpt: "Behind the scenes of our Saturday program",
        slug: "power-of-mentorship",
        readTime: "4 min read"
      }
    },
    {
      story: "I learned that being angry doesn't make me bad. I just need to pause, pray, and then talk. Now I help my little sister when she's upset.",
      author: "— Esther, age 11",
      icon: FaChild,
      blogPost: {
        title: "Teaching Emotional Regulation to Kids",
        excerpt: "Lessons from our Growth Journey curriculum",
        slug: "emotional-regulation-kids",
        readTime: "6 min read"
      }
    }
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {/* Header with blog link */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl flex justify-center items-center gap-3 font-bold tracking-tight text-deep-brown sm:text-4xl">
            
            Real Stories, Real Change
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-secondary/80">
            Hear from parents, mentors, and children whose lives have been transformed 
            through the Decent Humans journey.
          </p>
        </div>
        <a 
          href="/blog"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-[#b8922e] sm:mt-0"
        >
        
          Visit Our Blog
          <FaArrowRight size={12} />
        </a>
      </div>

      {/* Stories with blog connections */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {blogConnections.map((item, idx) => {
          const StoryIcon = item.icon;
          return (
            <div key={idx} className="group flex flex-col rounded-[32px] border border-brown/10 bg-white p-8 shadow-soft transition hover:shadow-md">
              <div className="flex items-start gap-3">
                
                <p className="text-secondary/80">"{item.story}"</p>
              </div>
              <p className="mt-6 font-semibold text-deep-brown">{item.author}</p>
              
              {/* Blog connection divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-brown/10"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-white px-2 text-secondary/40 flex items-center gap-1">
                    <FaBookOpen size={10} />
                    read the full story on our blog
                  </span>
                </div>
              </div>
              
              {/* Featured blog post */}
              <a 
                href={`/blog/${item.blogPost.slug}`}
                className="mt-2 block rounded-xl bg-secondary/5 p-4 transition hover:bg-secondary/10"
              >
                <h4 className="font-semibold text-deep-brown">{item.blogPost.title}</h4>
                <p className="mt-1 text-sm text-secondary/60">{item.blogPost.excerpt}</p>
                <div className="mt-3 flex items-center gap-2 text-xs text-accent">
                  <span>{item.blogPost.readTime}</span>
                  <span>•</span>
                  <span>Read more</span>
                  <FaArrowRight size={10} />
                </div>
              </a>
            </div>
          );
        })}
      </div>

      {/* Call to action with dual options */}
      <div className="mt-10 rounded-[32px] border border-brown/10 bg-white p-10 text-center shadow-soft">
        <h3 className="text-xl font-semibold text-deep-brown flex items-center justify-center gap-2">
          <FaPenFancy className="text-accent" size={22} />
          Want to share your story?
        </h3>
        <p className="mt-3 text-secondary/80">
          Your experience could inspire others and become a featured blog post.
        </p>
        
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://wa.me/254700000000?text=I'd%20like%20to%20share%20my%20story"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-deep-brown transition hover:bg-[#b8922e]"
          >
            <FaWhatsapp size={16} />
            Share Your Story
            
          </a>
          
        </div>
        
        <p className="mt-6 text-xs text-secondary/40 flex items-center justify-center gap-1">
          <FaStar size={10} />
          Selected stories are featured in our blog series "Changed Lives"
          <FaStar size={10} />
        </p>
      </div>
    </section>
  );
}

export default Blog;