import React from 'react';

const LandingPageCards = () => {

    const items = [
        {icon: "🤖", title: "Chat With PDF" , description: "Chat with your PDF file for whatever you want to understand!"},

        {icon: "🪄", title: "Create Magical Notes" , description: "Create lovely notes that you can stick to with your raw notes"},

        {icon: "📜", title: "Generate FlashCards" , description: "Generate Flashcards for easy remembrance of the topic"},

        {icon: "🧑🏻‍🎓", title: "Get Important Q/A" , description: "All the important questions at your footstep with answers"}
    ]

    return (
        <>
            {items.map((item) => (
                <div className="bg-gray-100 rounded-2xl p-6 w-72">
                    <div className="text-2xl mb-4">{item.icon}</div>
                    <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                    <p className="text-gray-600 text-sm">
                        {item.description}
                    </p>
                </div>
            ))}
        </>
    );
};

export default LandingPageCards;