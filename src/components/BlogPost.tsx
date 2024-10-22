import React from 'react';

interface BlogPostProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, description, date, imageUrl }) => {
  return (
    <article className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-[#004694]">{title}</h2>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">{date}</span>
          <button className="bg-[#004694] text-white px-3 py-1 text-sm rounded-md hover:bg-[#003674] transition-colors">
            Leer más
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;