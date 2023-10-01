import React from 'react';

const VotingComponent = () => {
    return (
        <div className="flex items-center justify-center p-4 space-x-2">
            {[5, 6, 7, 8, 9, 10].map((vote) => (
                <button
                    key={vote}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-peacock-blue text-peacock-blue hover:bg-peacock-blue hover:text-lightning-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-peacock-blue"
                >
                    {vote}
                </button>
            ))}
        </div>
    );
};

export default VotingComponent;
