import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import Anchor from "@ui/anchor";
import { ImageType } from "@utils/types";

const BlogCard = ({ className, title, slug, timeToRead, category, image }) => (
    <div className={clsx("rn-blog", className)}>
        <div className="inner">
            {image?.src && (
                <div className="thumbnail">
                    <Anchor path={`/blog/${slug}`}>
                        <Image
                            src={image.src}
                            alt={image?.alt || "Personal Portfolio Images"}
                            width={image?.width ? image.width : 489}
                            height={image?.height ? image.height : 366}
                        />
                    </Anchor>
                </div>
            )}
            <div className="content">
                <div className="category-info">
                    <div className="category-list">
                        <Anchor path={`/blog/category/${category.slug}`}>
                            {category.title}
                        </Anchor>
                    </div>
                    <div className="meta">
                        <span>
                            <i className="feather-clock" /> {timeToRead} min
                            read
                        </span>
                    </div>
                </div>
                <h4 className="title">
                    <Anchor path={`/blog/${slug}`}>
                        {title}
                        <i className="feather-arrow-up-right" />
                    </Anchor>
                </h4>
            </div>
        </div>
    </div>
);

BlogCard.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    timeToRead: PropTypes.number.isRequired,
    category: PropTypes.shape({
        title: PropTypes.string,
        slug: PropTypes.string,
    }).isRequired,
    image: ImageType,
};

export default BlogCard;
