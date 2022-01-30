import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { BsChatDots } from "react-icons/bs";
import { FiCamera } from "react-icons/fi";
import { Logo, Wrapper } from "../components";
import { AppBar } from "../components/navigation";

const Home: NextPage = () => {
  return (
    <Wrapper
      showNavbar
      hideFooter
      appBar={
        <AppBar
          leading={
            <button className="text-neutral-800 text-sm">
              <FiCamera size={24} className="text-inherit" />
            </button>
          }
          title={<Logo />}
          actions={
            <Link href="/direct/inbox" passHref>
              <BsChatDots className="text-inherit" size={24} />
            </Link>
          }
        />
      }
    >
      <Head>
        <title>Instagram</title>
      </Head>
      <section className="max-w-screen-sm1 sm2:max-w-screen-lg1 mx-auto sm2:px-5 w-full sm2:pt-7.5 flex flex-grow">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
        illum tempore, explicabo laboriosam ipsam sit similique deleniti. Ullam,
        ducimus accusamus. Quas vero iste ullam nostrum magni corporis veniam
        dolore magnam. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Possimus dolores impedit enim cum veritatis deserunt dolore.
        Exercitationem possimus odit vero. Debitis eos repudiandae
        exercitationem optio inventore eveniet adipisci a provident? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Voluptatibus explicabo
        atque, doloribus rerum facilis, modi voluptates similique illo nostrum
        architecto quo tempore ea, cum itaque. Dolor perferendis sapiente. Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Provident illum
        tempore, explicabo laboriosam ipsam sit similique deleniti. Ullam,
        ducimus accusamus. Quas vero iste ullam nostrum magni corporis veniam
        dolore magnam. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Possimus dolores impedit enim cum veritatis deserunt dolore.
        Exercitationem possimus odit vero. Debitis eos repudiandae
        exercitationem optio inventore eveniet adipisci a provident? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Voluptatibus explicabo
        atque, doloribus rerum facilis, modi voluptates similique illo nostrum
        architecto quo tempore ea, cum itaque. Dolor perferendis sapiente Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Provident illum
        tempore, explicabo laboriosam ipsam sit similique deleniti. Ullam,
        ducimus accusamus. Quas vero iste ullam nostrum magni corporis veniam
        dolore magnam. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Possimus dolores impedit enim cum veritatis deserunt dolore.
        Exercitationem possimus odit vero. Debitis eos repudiandae
        exercitationem optio inventore eveniet adipisci a provident? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Voluptatibus explicabo
        atque, doloribus rerum facilis, modi voluptates similique illo nostrum
        architecto quo tempore ea, cum itaque. Dolor perferendis sapiente Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Provident illum
        tempore, explicabo laboriosam ipsam sit similique deleniti. Ullam,
        ducimus accusamus. Quas vero iste ullam nostrum magni corporis veniam
        dolore magnam. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Possimus dolores impedit enim cum veritatis deserunt dolore.
        Exercitationem possimus odit vero. Debitis eos repudiandae
        exercitationem optio inventore eveniet adipisci a provident? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Voluptatibus explicabo
        atque, doloribus rerum facilis, modi voluptates similique illo nostrum
        architecto quo tempore ea, cum itaque. Dolor perferendis sapiente Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Provident illum
        tempore, explicabo laboriosam ipsam sit similique deleniti. Ullam,
        ducimus accusamus. Quas vero iste ullam nostrum magni corporis veniam
        dolore magnam. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Possimus dolores impedit enim cum veritatis deserunt dolore.
        Exercitationem possimus odit vero. Debitis eos repudiandae
        exercitationem optio inventore eveniet adipisci a provident? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Voluptatibus explicabo
        atque, doloribus rerum facilis, modi voluptates similique illo nostrum
        architecto quo tempore ea, cum itaque. Dolor perferendis sapiente Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Provident illum
        tempore, explicabo laboriosam ipsam sit similique deleniti. Ullam,
        ducimus accusamus. Quas vero iste ullam nostrum magni corporis veniam
        dolore magnam. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Possimus dolores impedit enim cum veritatis deserunt dolore.
        Exercitationem possimus odit vero. Debitis eos repudiandae
        exercitationem optio inventore eveniet adipisci a provident? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Voluptatibus explicabo
        atque, doloribus rerum facilis, modi voluptates similique illo nostrum
        architecto quo tempore ea, cum itaque. Dolor perferendis sapiente
      </section>
    </Wrapper>
  );
};

export default Home;
