const Maps = () => {
  return (
    <>
      <h2 className="ttl">عياداتنا</h2>
      <div className="grid-cols-prod grid gap-4 h-fit py-4 px-10">
        <div className="w-full  h-[300px]">
          <h3 className="text-center font-semibold text-lg py-3 bg-slate-200">
            كفر الشيخ
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3415.647787348541!2d30.946304!3d31.119519999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDA3JzEwLjMiTiAzMMKwNTYnNDYuNyJF!5e0!3m2!1sen!2seg!4v1683395404421!5m2!1sen!2seg"
            style={{ border: "0px" }}
            allowfullscreen=""
            loading="lazy"
            className="w-full h-[240px]"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full  h-[300px]">
          <h3 className="text-center font-semibold text-lg py-3 bg-slate-200">
            التجمع الخامس
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3455.455764972503!2d31.423831999999997!3d29.995066999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDU5JzQyLjIiTiAzMcKwMjUnMjUuOCJF!5e0!3m2!1sen!2seg!4v1683396850142!5m2!1sen!2seg"
            allowfullscreen=""
            loading="lazy"
            className="w-full h-[240px]"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full  h-[300px]">
          <h3 className="text-center font-semibold text-lg py-3 bg-slate-200">
            مدينة نصر
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.2062867045674!2d31.368315553967292!3d30.059620908060865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583dc25f5e8555%3A0xbd4eaa7f7e796599!2sMedical%20Center%203!5e0!3m2!1sen!2seg!4v1683394000961!5m2!1sen!2seg"
            allowfullscreen=""
            loading="lazy"
            className="w-full h-[240px]"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Maps;
