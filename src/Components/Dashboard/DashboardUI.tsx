interface IDashboardUIProps {
    fullName: string;
}

const DashboardUI = ({ fullName }: IDashboardUIProps) => {

    return (
        <div className="MainContainer">
            <div className="glass" style={{ textAlign: 'center' }}>
                <h2 className="Heading">{fullName}</h2>
            </div>
            <div className="boxView-outer grid_container">
                <div className="grid_item glass"></div>
                <div className="grid_item glass"></div>
                <div className="grid_item glass"></div>
                <div className="grid_item glass"></div>
                <div className="grid_item glass"></div>
                <div className="grid_item glass"></div>
                <div className="grid_item glass"></div>
                <div className="grid_item glass"></div>
                <div className="grid_item glass"></div>
                <div className="grid_item glass"></div>
            </div>
        </div>
    )
}

export default DashboardUI
