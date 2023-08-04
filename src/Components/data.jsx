const initialFiles = [
    {
        name: "Root",
        children: [
            {
                name: "Child 1",
                children: [
                    {
                        name: "Grand Child",
                        children: [
                            {
                                name: "Great Grand Child 1",
                                children: [
                                    {
                                        name: "Great Great Grand Child 1",
                                    },
                                    {
                                        name: "Great Great Grand Child 2",
                                    },
                                ],
                            },
                            {
                                name: "Great Grand Child 2",
                            },
                        ],
                    },
                ],
            },
            {
                name: "Child 2",
                children: [
                    {
                        name: "Grand Child",
                        children: [
                            {
                                name: "Great Grand Child 1",
                                children: [
                                    {
                                        name: "Great Great Grand Child 1",
                                        children: [
                                            {
                                                name: "Great Great Great Grand Child 1",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                name: "Child 3",
                children: [
                    {
                        name: "Grand Child",
                    },
                ],
            },
        ],
    },
];

export default initialFiles;
