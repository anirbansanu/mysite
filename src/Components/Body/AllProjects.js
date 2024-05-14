import React from 'react';
import { ProjectCardItem } from './ProjectCardItem';
import getAllData from '../../services/ProjectData';

export class AllProjects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: false,
            error: null,
            currentPage: 1,
            itemsPerPage: 9, // Assuming 9 projects per page
        };
    }

    fetchData = async () => {
        const { currentPage, itemsPerPage } = this.state;
        try {
            this.setState({ loading: true, error: null });
            const data = await getAllData(currentPage, itemsPerPage);
            console.log(data.data);
            this.setState({ data : data.data, loading: false });
        } catch (error) {
            console.error('Error fetching data:', error);
            this.setState({ loading: false, error });
        }
    };

    componentDidMount() {
        this.fetchData();
    }

    handleNextPage = () => {
        this.setState(prevState => ({
            currentPage: prevState.currentPage + 1,
        }), this.fetchData);
    };

    handlePrevPage = () => {
        this.setState(prevState => ({
            currentPage: Math.max(prevState.currentPage - 1, 1),
        }), this.fetchData);
    };

    render() {
        const { data, loading, error, currentPage } = this.state;

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }
        if (!Array.isArray(data.data)) {
            return <div>Data is not an array.</div>;
        }
        return (
            <div>
                <div className="row justify-content-center">
                    {data.data.map((d, i) => (
                        <div className="col-md-6 col-lg-4 p-3" key={i}>
                            <ProjectCardItem
                                imgUrl={d.img_path}
                                tittle={d.tittle}
                                badges={d.badges}
                                projectLink={d.projectLink}
                                githubLink={d.githubLink}
                                desc={d.desc}
                            />
                        </div>
                    ))}
                </div>
                <div className="d-flex justify-content-space-between">
                    <button className="btn-sm btn-outline-warning " onClick={this.handlePrevPage} disabled={currentPage === 1}>
                        Previous Page
                    </button>
                    <button className="btn btn-sm btn-outline-warning" onClick={this.handleNextPage}>Next Page</button>
                </div>
            </div>
        );
    }
}
