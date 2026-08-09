import { RichText } from '@wordpress/block-editor';

export function HeroStatsEdit( { stats, setAttributes } ) {
	const updateStat = ( index, key, value ) => {
		const next = stats.map( ( stat, i ) =>
			i === index ? { ...stat, [ key ]: value } : stat
		);
		setAttributes( { stats: next } );
	};

	return (
		<dl className="saas-hero__stats">
			{ stats.map( ( stat, index ) => (
				<div key={ index } className="saas-hero__stat">
					<RichText
						tagName="dt"
						className="saas-hero__stat-value"
						value={ stat.value }
						onChange={ ( value ) =>
							updateStat( index, 'value', value )
						}
						allowedFormats={ [] }
					/>
					<RichText
						tagName="dd"
						className="saas-hero__stat-label"
						value={ stat.label }
						onChange={ ( value ) =>
							updateStat( index, 'label', value )
						}
						allowedFormats={ [] }
					/>
				</div>
			) ) }
		</dl>
	);
}

export function HeroStatsSave( { stats } ) {
	return (
		<dl className="saas-hero__stats">
			{ stats.map( ( stat, index ) => (
				<div key={ index } className="saas-hero__stat">
					<RichText.Content
						tagName="dt"
						className="saas-hero__stat-value"
						value={ stat.value }
					/>
					<RichText.Content
						tagName="dd"
						className="saas-hero__stat-label"
						value={ stat.label }
					/>
				</div>
			) ) }
		</dl>
	);
}
