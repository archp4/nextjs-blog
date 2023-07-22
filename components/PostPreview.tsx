import { PostMetedata } from "./PostMetadata";
import Link from 'next/link';

const PostPreview = (props: PostMetedata) => {
    const hrefLink = '/posts/'+props.slug;
    return (
        <div className="border border-slate-300 p-4 rounded-md shadow-sm bg-white">
            <p className="text-slate-400">{props.date}</p>
            <Link href={hrefLink}>
                <h2 className="font-bold mb-4 text-violet-600 hover:underline">{props.title}</h2>  
            </Link>
            <p className="text-slate-400 text-sm">{props.subtitle}</p>
        </div>
    );
};

export default PostPreview;