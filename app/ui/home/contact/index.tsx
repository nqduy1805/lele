'use client';
import Question  from '@/app/ui/home/contact/question';

const QA = [
    {question:'how is vitale different from other organic foods brands?',answer:"Vitale stands out for our commitment to transparency, sustainable sourcing, and exceptional quality. We prioritize ethical practices, supporting local farmers, and delivering fresh, nutritious organic products to our customers."},
    {question:'Are your products certified organic?',answer:"Vitale stands out for our commitment to transparency, sustainable sourcing, and exceptional quality. We prioritize ethical practices, supporting local farmers, and delivering fresh, nutritious organic products to our customers."},
    {question:'Where do you source your organic ingredients from?',answer:"Vitale stands out for our commitment to transparency, sustainable sourcing, and exceptional quality. We prioritize ethical practices, supporting local farmers, and delivering fresh, nutritious organic products to our customers."},
    {question:'Do you offer gluten-free options?',answer:"Vitale stands out for our commitment to transparency, sustainable sourcing, and exceptional quality. We prioritize ethical practices, supporting local farmers, and delivering fresh, nutritious organic products to our customers."},
    {question:'How can I get more information about products and sourcing?',answer:"Vitale stands out for our commitment to transparency, sustainable sourcing, and exceptional quality. We prioritize ethical practices, supporting local farmers, and delivering fresh, nutritious organic products to our customers."},
    {question:'how can i buy in bulk?',answer:"Vitale stands out for our commitment to transparency, sustainable sourcing, and exceptional quality. We prioritize ethical practices, supporting local farmers, and delivering fresh, nutritious organic products to our customers."},

  ];
export default function Contact() {

    return (
      <div className="grid  grid-rows-[auto] gap-x-[3vw] gap-y-[3vw] sm:grid-cols-1 lg:grid-cols-2 p-[3vw]">
       <div className="">
       {QA.map((ques, idx) => {
            return (
                <Question question={ques.question} answer={ques.answer} key={idx} />
            );
        })}
       </div>
       <div>
        <p>want to learn more about sustainable  lifestyle choices and delicious organic recipes?</p>
        <p>subscribe to our newsletter</p>
            <input type="input" />
            {/* <input type="submit"/> */}
       </div>
      </div>
    );
  }
  