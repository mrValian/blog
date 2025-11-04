import styled from 'styled-components';
import { Icon } from '../../../../components';
import { Link } from 'react-router-dom';

const PostCardContainer = ({
	className,
	id,
	title,
	publishedAt,
	commentsCount,
	imageUrl,
}) => {
	return (
		<div className={className}>
			<Link to={`/post/${id}`}>
				<img src={imageUrl} alt={title} />
				<div className="post-card-footer">
					<h4>{title}</h4>
					<div className="post-card-info">
						<div className="published-at">
							{publishedAt && (
								<Icon
									id="fa-calendar-o"
									margin="0 10px 0 0"
									size="18px"
									inactive={true}
								/>
							)}
							{publishedAt}
						</div>
						<div className="comments-count">
							<Icon
								id="fa-comment-o"
								margin="0 10px 0 0"
								size="18px"
								inactive={true}
							/>
							{commentsCount}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export const PostCard = styled(PostCardContainer)`
	display: flex;
	flex-direction: column;
	width: 280px;
	border: 1px solid #000;
	overflow: hidden;

	& img {
		display: block;
		width: 100%;
	}

	& h4 {
		margin: 0 0 5px 0;
	}

	& .post-card-footer {
		border-top: 1px solid #000;
		padding: 5px;
	}

	& .post-card-info {
		display: flex;
		justify-content: space-between;
	}

	& .published-at {
		display: flex;
	}

	& .comments-count {
		display: flex;
	}
`;
