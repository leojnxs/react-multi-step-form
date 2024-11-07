const generateRandomToken = () => crypto.randomUUID();

const delay = () => new Promise((resolve) => setTimeout(resolve, Math.random() * 3000));

const useAuthentication = () => {
  const signup = async (data: Record<string, string>) => {
    console.log("[api-sdk] signing up...", data);

    await delay();

    const challengeToken = generateRandomToken();

    console.log("[api-sdk] signup started, challenge created...", challengeToken);

    return challengeToken;
  };

  const completeSignup = async ({ challengeToken, otp }: Record<string, string>) => {
    if (!challengeToken) {
      throw Error("Challenge token is necessary for completing challenge");
    }

    console.log("[api-sdk] completing signup challenge...", otp);

    await delay();

    console.log("[api-sdk] signup completed");
  };

  return { signup, completeSignup };
};

export default useAuthentication;
