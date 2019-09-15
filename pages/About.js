export default ({ children}) => (
    <MDXProvider components={components}>
        <Layout>
            <Content>
                <Header>MDXPage</Header>
                <Card>{children}</Card>
            </Content>
        </Layout>
    </MDXProvider>
 )