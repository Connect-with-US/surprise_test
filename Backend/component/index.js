
 
 function convertToJSON(text) {
    const questions = text.split(/\*\*\d+\.\s+/).slice(1);

    const jsonFormat = questions.map((question) => {
        const [questionText, options] = question.split(/\n[a-d]\) /);
        const [correctAnswer] = options.match(/.+\n/);

        return {
            question: questionText.trim(),
            options: options.split(/\n/).map((option) => option.trim()),
            answer: correctAnswer.trim(),
        };
    });

    return JSON.stringify(jsonFormat);
}

const text="**1. What is the primary purpose of React Hooks?**\na) To manage state and side effects in functional components\nb) To create custom components\nc) To handle user input\nd) To style components\n\n**2. Which of the following is NOT a built-in React Hook?**\na) useState\nb) useEffect\nc) useReducer\nd) useMemo\n\n**3. What is the syntax for using the useState Hook?**\na) const [state, setState] = useState(initialValue);\nb) const [state] = useState(initialValue);\nc) const state = useState(initialValue);\nd) const [state, setState] = useState();\n\n**4. What is the purpose of the useEffect Hook?**\na) To perform side effects in functional components\nb) To manage state\nc) To handle user input\nd) To style components\n\n**5. Which of the following is NOT a valid lifecycle method in React?**\na) componentDidMount\nb) componentWillUnmount\nc) componentDidUpdate\nd) componentWillReceiveProps\n\n**6. What is the recommended way to pass data from a parent component to a child component in React?**\na) Using props\nb) Using state\nc) Using context\nd) Using refs\n\n**7. Which of the following is NOT a valid way to style components in React?**\na) Inline styling\nb) CSS modules\nc) Styled components\nd) Class names\n\n**8. What is the purpose of the React Icon component?**\na) To display icons in a React application\nb) To manage state\nc) To handle user input\nd) To style components\n\n**9. Which of the following is NOT a valid prop for the React Icon component?**\na) name\nb) size\nc) color\nd) href\n\n**10. What is the recommended way to import icons in a React application?**\na) Using the @material-ui/icons package\nb) Using the @fortawesome/react-fontawesome package\nc) Using the react-icons package\nd) Using the material-icons package"

// console.log(convertToJSON(text))
module.exports={convertToJSON}
