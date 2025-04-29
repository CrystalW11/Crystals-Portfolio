const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  source_code_link, // Add this line if you want to destructure it directly
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium text-[16px] hover:underline"
          >
            <span className="blue-text-gradient">@</span> {name}
          </a>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);
