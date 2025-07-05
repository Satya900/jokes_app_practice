export default function handler(req, res) {
  const jokes = [
    {
      id: '1',
      title: 'Doctor Jokes',
      content: 'Why did the doctor carry a red pen? In case they needed to draw blood!'
    },
    {
      id: '2',
      title: 'Math Jokes',
      content: 'Why was the equal sign so humble? Because it knew it wasn’t less than or greater than anyone else!'
    },
    {
      id: '3',
      title: 'Science Jokes',
      content: 'Why can’t you trust an atom? Because they make up everything!'
    },
    {
      id: '4',
      title: 'History Jokes',
      content: 'Why did the history teacher break up with the geography teacher? There was no chemistry!'
    },
    {
      id: '5',
      title: 'Programming Jokes',
      content: 'Why do programmers prefer dark mode? Because light attracts bugs!'
    }
  ];
  res.status(200).json(jokes);
}
