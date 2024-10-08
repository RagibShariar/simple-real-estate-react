export default function SectionHeading({
  sectionTitleTop,
  sectionTitle,
  sectionDescription,
}) {
  return (
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4">
        <div className="mx-auto mb-[60px] max-w-[520px] text-center">
          <span className="mb-2 block text-lg font-semibold text-primary">
            {sectionTitleTop}
          </span>
          <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
            {sectionTitle}
          </h2>
          <p className="mx-auto max-w-[485px] text-base text-body-color dark:text-dark-6">
            {sectionDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
