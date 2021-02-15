import Layout from '../../../components/layout';
import { useRouter } from 'next/router';

export default function ShowDetail() {
    const router = useRouter();
    const { id, q } = router.query;

    return (
        <Layout title='Listado de Tv shows'>
        <div>Detalle del Show {id} {q}</div>
        </Layout>
    );
}