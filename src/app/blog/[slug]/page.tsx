// 개별 블로그 포스트 페이지
interface Props {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: Props) {
  const { slug } = params;

  return (
    <main>
      <section className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.252742810717!2d127.02651621531112!3d37.49928897981131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca157b757b7c5%3A0x168510caec9b0097!2z6rCV64Ko64yA7ZWZ6rWQ!5e0!3m2!1sko!2skr!4v1629788781818!5m2!1sko!2skr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </section>
    </main>
    // <div>
    //   <h1>Blog Post: {slug}</h1>
    //   {/* 포스트 내용 */}
    // </div>
  );
}
