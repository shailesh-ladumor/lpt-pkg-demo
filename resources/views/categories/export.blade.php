<table>
    <thead>
    <tr>
        <th>Name</th>
    </tr>
    </thead>
    <tbody>
    @foreach($categories as $category)
        <tr>
            <td>{{ $category->name }}</td>
        </tr>
    @endforeach
    </tbody>
</table>