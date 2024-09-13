import React from 'react';
import BlogGrid from './BlogGrid';

const NewsSection = () => {
    const blogPosts = [
        {
            image: "src/assets/blog1.png",
            title: "Zakayo Shuka",
            description:
                "You have no choice but to listen to Gen Zs now - UHURU tells RUTO as he supports the youth revolution 100%.In a world where technology and youth converge at an unprecedented rate, the political landscape is undergoing a seismic shift.Zakayo Shuka, a bold youth leader, has emerged as the voice of Generation Z, a group that is more connected, informed, and outspoken than any generation before it. His recent rally in the heart of the capital drew massive crowds, calling for systemic reforms and greater youth representation in government...",
            author: "Jack Jr",
            time: "3 hrs ago",
            category: "Politics",
        },
        {
            image: "src/assets/blogJ.webp",
            title: "Noon Bites & Brainwaves",
            description:
                "You want it so much you’re willing to live for it. Most people think the biggest sacrifice they can make is to die for something. They are wrong. Who am I to judge so? I am The Skptic.",
            author: "Jack Jr",
            time: "20 mins ago",
            category: "Fiction",
            readMoreLink: "https://medium.com/@jj_jots/noon-bites-brainwaves-ff61007899d6",
        },
        {
            image: "src/assets/blog3.jpg",
            title: "Scandal in Politics",
            description:
                "Big political players under fire as a new scandal erupts in the country. More details inside.",
            author: "John Doe",
            time: "1 hr ago",
            category: "Entertainment",
            readMoreLink: "#",
        },
        {
            image: "src/assets/blog4.jpg",
            title: "Kenya's Economic Outlook",
            description:
                "Experts weigh in on the future of Kenya’s economy after recent policy changes.",
            author: "Mary Ann",
            time: "8 hrs ago",
            category: "Economy",
            readMoreLink: "#",
        },
        {
            image: "src/assets/blog5.webp",
            title: "Tech Startups on the Rise",
            description:
                "With increasing foreign investments, Kenya’s tech scene is booming like never before.",
            author: "Alice Wangui",
            time: "12 hrs ago",
            category: "Technology",
            readMoreLink: "#",
        },
        {
            image: "src/assets/blog6.jpg",
            title: "Climate Change Concerns",
            description:
                "Activists warn about the rapid environmental degradation and its potential effects on future generations.",
            author: "David Kariuki",
            time: "10 hrs ago",
            category: "Environment",
            readMoreLink: "#",
        },
        {
            image: "src/assets/blog7.jpg",
            title: "The Future of Kenyan Music",
            description:
                "How local artists are redefining the sound of East Africa and making their mark internationally.",
            author: "Lydia Muthoni",
            time: "2 days ago",
            category: "Music",
            readMoreLink: "#",
        },
        {
            image: "src/assets/blog8.jpg",
            title: "Youth in Politics",
            description:
                "Young politicians are increasingly gaining influence in Kenya’s political landscape.",
            author: "Kevin Oduor",
            time: "3 days ago",
            category: "Politics",
            readMoreLink: "#",
        },
        {
            image: "src/assets/blog9.jpg",
            title: "Health Initiatives in Rural Areas",
            description:
                "New programs aim to improve healthcare access in remote parts of Kenya.",
            author: "Grace Mutua",
            time: "6 days ago",
            category: "Health",
            readMoreLink: "#",
        },
        {
            image: "src/assets/blog10.jpg",
            title: "Kenya's Role in the African Union",
            description:
                "Kenya is set to take on a more prominent role in shaping the future of the African Union.",
            author: "Peter Wanjohi",
            time: "4 days ago",
            category: "Politics",
            readMoreLink: "#",
        },
    ];

    return (
        <section
            id="news-section"
            className='py-20'
        >
            <div className="container mx-auto px-6">
                <h2 className="text-5xl font-semibold text-center mb-4">News & Updates</h2>
                <p className="text-center max-w-md mx-auto text-battleshipGray">
                    Our aim is to provide you with unbiased info
                </p>
            </div>

            <section id="blog" className="rounded-lg py-20">
                <div className="container mx-auto px-6">
                    <BlogGrid blogPosts={blogPosts} />
                </div>
            </section>
        </section>
    );
};

export default NewsSection;
