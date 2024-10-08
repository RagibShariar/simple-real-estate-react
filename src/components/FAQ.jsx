import SectionHeading from "./SectionHeading";
import FAQicon from "./svg/FAQicon";
import FAQPattern1 from "./svg/FAQPattern1";
import FAQPattern2 from "./svg/FAQPattern2";

export default function FAQ() {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container mx-auto">
        <SectionHeading
          sectionTitleTop={"FAQ"}
          sectionTitle={"Any Questions? Look Here"}
          sectionDescription={
            "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          }
        />
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 flex lg:mb-[70px]">
              <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                <FAQicon />
              </div>
              <div className="w-full">
                <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Is TailGrids Well-documented?
                </h3>
                <p className="text-base text-body-color dark:text-dark-6">
                  It takes 2-3 weeks to get your first blog post ready. That
                  includes the in-depth research & creation of your monthly
                  content ui/ux strategy that we do writing your first blog
                  post.
                </p>
              </div>
            </div>
            <div className="mb-12 flex lg:mb-[70px]">
              <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                <FAQicon />
              </div>
              <div className="w-full">
                <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Is TailGrids Well-documented?
                </h3>
                <p className="text-base text-body-color dark:text-dark-6">
                  It takes 2-3 weeks to get your first blog post ready. That
                  includes the in-depth research & creation of your monthly
                  content ui/ux strategy that we do writing your first blog
                  post.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 flex lg:mb-[70px]">
              <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                <FAQicon />
              </div>
              <div className="w-full">
                <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Is TailGrids Well-documented?
                </h3>
                <p className="text-base text-body-color dark:text-dark-6">
                  It takes 2-3 weeks to get your first blog post ready. That
                  includes the in-depth research & creation of your monthly
                  content ui/ux strategy that we do writing your first blog
                  post.
                </p>
              </div>
            </div>
            <div className="mb-12 flex lg:mb-[70px]">
              <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                <FAQicon />
              </div>
              <div className="w-full">
                <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Is TailGrids Well-documented?
                </h3>
                <p className="text-base text-body-color dark:text-dark-6">
                  It takes 2-3 weeks to get your first blog post ready. That
                  includes the in-depth research & creation of your monthly
                  content ui/ux strategy that we do writing your first blog
                  post.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="absolute left-4 top-4 -z-[1]">
          <FAQPattern1 />
        </span>
        <span className="absolute bottom-4 right-4 -z-[1]">
          <FAQPattern2 />
        </span>
      </div>
    </section>
  );
}
