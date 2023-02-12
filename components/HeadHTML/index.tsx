import { HeadhtmlProps } from "@/@types/headhtml.types";
import Head from "next/head";

const Headhtml = ({ metaDesc, title }: HeadhtmlProps) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={`${metaDesc}`} />
		</Head>
	);
};

export default Headhtml;
