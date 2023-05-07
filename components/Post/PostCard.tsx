import Link from "next/link";
import { Card, Figure, Title, Excerpt } from "./PostCardStyle";

export const PostCard = () => {
  return (
    <Link href="/post/example" passHref>
      <Card>
        <Figure>
          <img src="/image1.jpg" alt="Post Phone" />
        </Figure>

        <Title>Post Title</Title>
        <Excerpt>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium fugit magni ad ea quam corporis accusamus possimus non
            laborum cupiditate, porro temporibus, neque quia rerum ut. Tenetur
            cumque nihil dignissimos aspernatur iusto debitis eligendi eius,
            nam, magni corporis quisquam!
          </p>
        </Excerpt>
      </Card>
    </Link>
  );
};
