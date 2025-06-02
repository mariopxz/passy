type Template = {
  name: string;
  example: string;
  config: {
    length: number;
    includeUppercase: boolean;
    includeNumbers: boolean;
    includeSpecialCharacters: boolean;
  };
};

export const passwordTemplates: Template[] = [
  {
    name: "Memorable Phrase",
    example: "Correct-Horse-Battery-Staple",
    config: {
      length: 16,
      includeUppercase: true,
      includeNumbers: false,
      includeSpecialCharacters: true,
    },
  },
  {
    name: "Simple",
    example: "password123",
    config: {
      length: 12,
      includeUppercase: false,
      includeNumbers: true,
      includeSpecialCharacters: false,
    },
  },
  {
    name: "PIN Style",
    example: "1289–3567–3210",
    config: {
      length: 12,
      includeUppercase: false,
      includeNumbers: true,
      includeSpecialCharacters: false,
    },
  },
  {
    name: "First Letter Sentence",
    example: "Ihtto@bwma1995!",
    config: {
      length: 16,
      includeUppercase: true,
      includeNumbers: true,
      includeSpecialCharacters: true,
    },
  },
  {
    name: "Custom Pattern",
    example: "Pwd_2023_Secure!",
    config: {
      length: 18,
      includeUppercase: true,
      includeNumbers: true,
      includeSpecialCharacters: true,
    },
  },
];