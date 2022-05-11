import PropTypes from "prop-types";
import clsx from "clsx";
import CategoryWidget from "@widgets/category-widget";
import RecentPostsWidget from "@widgets/recent-posts-widget";
import TagWidget from "@widgets/tag-widget";

const BlogSidebar = ({ className, categories, recentPosts, tags }) => (
    <aside className={clsx("rwt-sidebar", className)}>
        <CategoryWidget categories={categories} />
        <RecentPostsWidget recentPosts={recentPosts} />
        <TagWidget tags={tags} />
    </aside>
);

BlogSidebar.propTypes = {
    className: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.shape({})),
    recentPosts: PropTypes.arrayOf(PropTypes.shape({})),
    tags: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
};

export default BlogSidebar;
